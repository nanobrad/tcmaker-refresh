/**
 * Twin Cities Maker — Progressive Responsive Navigation
 * Uses native Popover API (with conditional @oddbird/popover-polyfill)
 * and ResizeObserver width measurement instead of hardcoded breakpoints.
 */

if (!Object.hasOwn(HTMLElement.prototype, "popover")) {
  import("https://unpkg.com/@oddbird/popover-polyfill@latest/dist/popover.min.js");
}

const header = document.querySelector(".site-header");
const headerInner = header?.querySelector(".header-inner");
const siteMenu = document.getElementById("site-menu");
const dropdownItem = header?.querySelector(".nav-dropdown");
const dropdownTrigger = dropdownItem?.querySelector(".dropdown-trigger");
const dropdownList = document.getElementById("workshops-menu");

if (header && headerInner && siteMenu && dropdownItem && dropdownTrigger && dropdownList) {
  let lastHeaderWidth = header.clientWidth;
  let isHoverPreview = false;

  const supportsPositionArea = CSS.supports("position-area", "block-end");

  const positionFallbackDropdown = () => {
    if (!header.classList.contains("is-wide") || supportsPositionArea) return;
    const triggerRect = dropdownTrigger.getBoundingClientRect();
    const listRect = dropdownList.getBoundingClientRect();

    let top = triggerRect.bottom + 8;
    if (top + listRect.height > window.innerHeight && triggerRect.top - listRect.height - 8 >= 0) {
      top = triggerRect.top - listRect.height - 8;
    }

    const maxLeft = Math.max(0, window.innerWidth - listRect.width - 8);
    const left = Math.min(Math.max(8, triggerRect.left), maxLeft);

    dropdownList.style.top = `${top}px`;
    dropdownList.style.left = `${left}px`;
  };

  const syncNavigationLayout = () => {
    const wasMenuOpen = siteMenu.matches(":popover-open, .\\:popover-open");

    header.classList.add("is-measuring");
    header.classList.add("is-wide");
    dropdownList.removeAttribute("popover");
    dropdownList.hidden = true;

    const fitsInline = headerInner.scrollWidth <= headerInner.clientWidth;

    if (fitsInline) {
      siteMenu.removeAttribute("popover");
      dropdownList.setAttribute("popover", "auto");
      dropdownList.hidden = false;
      dropdownTrigger.setAttribute("aria-expanded", "false");
    } else {
      header.classList.remove("is-wide");
      siteMenu.setAttribute("popover", "auto");
      dropdownList.removeAttribute("popover");
      dropdownList.hidden = true;
      dropdownTrigger.setAttribute("aria-expanded", "false");

      if (wasMenuOpen && typeof siteMenu.showPopover === "function") {
        try {
          siteMenu.showPopover();
        } catch {
          // Ignore if polyfill has not upgraded yet
        }
      }
    }

    requestAnimationFrame(() => {
      header.classList.remove("is-measuring");
    });
  };

  // Narrow-mode inline disclosure toggle
  dropdownTrigger.addEventListener("click", (event) => {
    if (header.classList.contains("is-wide")) {
      if (isHoverPreview) {
        isHoverPreview = false;
        event.preventDefault();
      }
      return;
    }

    const nextExpanded = dropdownTrigger.getAttribute("aria-expanded") !== "true";
    dropdownTrigger.setAttribute("aria-expanded", String(nextExpanded));
    dropdownList.hidden = !nextExpanded;
  });

  // Wide-mode native popover toggle state sync + anchor fallback positioning
  dropdownList.addEventListener("toggle", (event) => {
    if (!header.classList.contains("is-wide")) return;
    const isOpen = event.newState === "open";
    dropdownTrigger.setAttribute("aria-expanded", String(isOpen));
    if (!isOpen) {
      isHoverPreview = false;
    } else {
      positionFallbackDropdown();
    }
  });

  // Wide-mode hover preview on pointer devices
  dropdownItem.addEventListener("pointerenter", (event) => {
    if (
      !header.classList.contains("is-wide") ||
      !window.matchMedia("(hover: hover)").matches ||
      event.pointerType === "touch"
    ) {
      return;
    }

    if (!dropdownList.matches(":popover-open, .\\:popover-open") && typeof dropdownList.showPopover === "function") {
      try {
        isHoverPreview = true;
        dropdownList.showPopover({ source: dropdownTrigger });
      } catch {
        isHoverPreview = false;
      }
    }
  });

  dropdownItem.addEventListener("pointerleave", () => {
    if (!header.classList.contains("is-wide") || !isHoverPreview) return;
    isHoverPreview = false;
    if (typeof dropdownList.hidePopover === "function") {
      try {
        dropdownList.hidePopover();
      } catch {
        // Ignore if already closed
      }
    }
  });

  // Close wide submenu when keyboard focus leaves the entire dropdown item
  dropdownItem.addEventListener("focusout", (event) => {
    if (!header.classList.contains("is-wide")) return;
    if (event.relatedTarget && !dropdownItem.contains(event.relatedTarget)) {
      if (typeof dropdownList.hidePopover === "function") {
        try {
          dropdownList.hidePopover();
        } catch {
          // Ignore if already closed
        }
      }
    }
  });

  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      if (entry.target === header) {
        const currentWidth = header.clientWidth;
        const currentlyWide = header.classList.contains("is-wide");
        if (currentlyWide || currentWidth > lastHeaderWidth) {
          lastHeaderWidth = currentWidth;
          syncNavigationLayout();
        } else {
          lastHeaderWidth = currentWidth;
        }
      } else if (entry.target === siteMenu && header.classList.contains("is-wide")) {
        syncNavigationLayout();
      }
    }
  });

  syncNavigationLayout();
  resizeObserver.observe(header);
  resizeObserver.observe(siteMenu);

  if (document.fonts?.ready) {
    document.fonts.ready.then(syncNavigationLayout);
  }
}
