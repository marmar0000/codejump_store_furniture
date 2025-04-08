'use strict';

{
  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const overlay = document.querySelector(".overlay");
    const menuLinks = menu.querySelectorAll("a");
    let lastFocusedElement;

    // メニューの開閉状態を管理する関数
    function toggleMenu(isOpen) {
      hamburger.classList.toggle("active", isOpen);
      menu.classList.toggle("active", isOpen);
      overlay.classList.toggle("active", isOpen);
      hamburger.setAttribute("aria-expanded", isOpen);

      if (isOpen) {
        lastFocusedElement = document.activeElement;
        // 最初のメニューリンクにフォーカスを移動
        menuLinks[0]?.focus();
      } else {
        // メニューを閉じたら、前にフォーカスしていた要素に戻す
        lastFocusedElement?.focus();
      }
    }

    // メニューを閉じる関数
    function closeMenu() {
      toggleMenu(false);
    }

    hamburger.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true";
      toggleMenu(!isExpanded);
    });

    overlay.addEventListener("click", closeMenu);

    // Escキーでメニューを閉じられるようにする
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("active")) {
        closeMenu();
      }
    });

    // メニュー内の最後のリンクからのTabキーで、ハンバーガーメニューに戻る
    menuLinks[menuLinks.length - 1]?.addEventListener("keydown", function (e) {
      if (e.key === "Tab" && !e.shiftKey) {
        e.preventDefault();
        hamburger.focus();
      }
    });

    // ハンバーガーメニューからのShift+Tabで、最後のメニューリンクに移動
    hamburger.addEventListener("keydown", function (e) {
      if (e.key === "Tab" && e.shiftKey && menu.classList.contains("active")) {
        e.preventDefault();
        menuLinks[menuLinks.length - 1]?.focus();
      }
    });
  });
}



















//# sourceMappingURL=script.js.map
