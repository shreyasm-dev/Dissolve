class dissolvePieChart {
  constructor(slices, elem, rotation = -90) {
    const svgEl = elem;
    let cumulativePercent = 0;
    svgEl.setAttribute("viewBox", "-1 -1 2 2");
    svgEl.style.transform = "rotate(" + rotation + "deg)";
    function getPercent(percent) {
      const x = Math.cos(2 * Math.PI * percent);
      const y = Math.sin(2 * Math.PI * percent);
      return [x, y];
    }
    slices.forEach((slice) => {
      const [startX, startY] = getPercent(cumulativePercent);
      cumulativePercent += slice.percent;
      const [endX, endY] = getPercent(cumulativePercent);
      const largeArcFlag = slice.percent > 0.5 ? 1 : 0;
      const pathData = [
        `M ${startX} ${startY}`,
        `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
        `L 0 0`,
      ].join(" ");
      const pathEl = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      pathEl.setAttribute("d", pathData);
      pathEl.setAttribute("fill", slice.color);
      for (var loopThroughHoverProps in slice.hover) {
        pathEl.style.transitionDuration = slice.hover.transitionDuration;
        pathEl.addEventListener(
          "mouseover",
          function () {
            pathEl.style[loopThroughHoverProps] =
              slice.hover[loopThroughHoverProps];
          },
          false
        );
        pathEl.addEventListener(
          "mouseleave",
          function () {
            pathEl.style[loopThroughHoverProps] = "";
          },
          false
        );
      }
      svgEl.appendChild(pathEl);
    });
    return svgEl;
  }
}
