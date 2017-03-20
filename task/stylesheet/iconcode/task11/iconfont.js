;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-icon-yxj-bill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M651.776 286.72 619.52 286.72l0 19.968c0 8.704-6.656 15.872-14.848 15.872L419.328 322.56c-8.704 0-14.848-7.168-14.848-15.872L404.48 286.72l-32.256 0C342.528 286.72 317.44 309.76 317.44 339.456l0 384c0 30.208 25.088 54.784 54.784 54.784l279.04 0c30.208 0 54.784-24.576 54.784-54.784l0-384C706.56 309.76 681.472 286.72 651.776 286.72zM634.88 686.08 378.88 686.08c-8.704 0-15.36-6.656-15.36-15.36s6.656-15.36 15.36-15.36l256 0c8.704 0 15.36 6.656 15.36 15.36S643.584 686.08 634.88 686.08zM634.88 583.68 378.88 583.68c-8.704 0-15.36-6.656-15.36-15.36s6.656-15.36 15.36-15.36l256 0c8.704 0 15.36 6.656 15.36 15.36S643.584 583.68 634.88 583.68zM634.88 481.28 378.88 481.28c-8.704 0-15.36-6.656-15.36-15.36s6.656-15.36 15.36-15.36l256 0c8.704 0 15.36 6.656 15.36 15.36S643.584 481.28 634.88 481.28z"  ></path>' +
    '' +
    '<path d="M435.2 245.76l153.6 0 0 46.08-153.6 0 0-46.08Z"  ></path>' +
    '' +
    '<path d="M512 0C229.376 0 0 228.864 0 512c0 282.624 229.376 512 512 512s512-229.376 512-512C1024 228.864 794.624 0 512 0zM737.28 723.456c0 47.104-38.912 85.504-85.504 85.504L372.224 808.96c-47.104 0-85.504-38.4-85.504-85.504l0-384C286.72 292.864 325.632 256 372.224 256L404.48 256l0-23.04c0-8.704 6.656-17.92 14.848-17.92l184.832 0c8.704 0 14.848 9.216 14.848 17.92L619.008 256l32.256 0c47.104 0 85.504 36.864 85.504 83.456L736.768 723.456z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zuobiankuohao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M736.41984 885.0432c7.74144 7.74144 8.4992 20.8896 0.79872 29.3888-7.76192 8.4992-20.91008 8.4992-28.59008 0.77824L288.27648 529.63328c-8.4992-6.94272-9.27744-20.0704-1.536-28.59008L693.92384 108.52352c7.76192-7.72096 20.91008-6.9632 28.59008 0.77824 7.76192 8.4992 7.76192 20.86912-0.73728 28.59008L331.55072 514.9696 736.41984 885.0432z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)