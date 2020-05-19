#Dissolve
Usage -
<br>

```html

<svg id="myPie"></svg>
<script>
  var pie = new dissolvePieChart(
    [
      {
        percent: 0.1,
        color: "lightblue",
        hover: {
          transitionDuration: "0.5s",
          opacity: "0.7",
        },
      },
      {
        percent: 0.65,
        color: "CornflowerBlue",
        hover: {
          transitionDuration: "0.5s",
          opacity: "0.7",
        },
      },
      {
        percent: 0.2,
        color: "#00ab6b",
        hover: {
          transitionDuration: "0.5s",
          opacity: "0.7",
        },
      },
      {
        percent: 0.05,
        color: "#004533",
        hover: {
          transitionDuration: "0.5s",
          opacity: "0.7",
        },
      },
    ],
    document.getElementById("myPie"),
    -90
  );
</script>

```
