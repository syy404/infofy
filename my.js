document.addEventListener("DOMContentLoaded", function () {
  var rellax = new Rellax(".rellax");
  ScrollReveal().reveal(".reveal");
  /*  console.log("Rellax instance:", rellax);

  document.querySelectorAll(".rellax").forEach((el) => {
    console.log("Element:", el);
    console.log("Rellax speed:", el.getAttribute("data-rellax-speed"));
  });

  window.addEventListener("scroll", () => {
    console.log("scrolling...");
  });

  console.log("Rellax elements:", rellax.elems); */

  function addme(a, b) {
    var target = document.querySelector(a);

    if (!target) {
      console.error(`Element ${a} not found`);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          target.classList.add(b);
        } else {
          target.classList.remove(b);
        }
      });
    });

    observer.observe(target);
  }
  addme(".text-7e", "buzzout");
  addme(".text-82", "buzzout");
  addme(".text-8f", "buzzout");
  addme(".text-93", "buzzout");
  addme(".text-97", "buzzout");

  /*   addme(".text-7e", "glow-animation");
  addme(".text-82", "glow-animation");
  addme(".text-8f", "glow-animation");
  addme(".text-93", "glow-animation");
  addme(".text-97", "glow-animation"); */
  /* MENU */
  let ringboxClicked = false;
  $("#ringbox").click(function () {
    if ($("#indexbox").is(":visible")) {
      $("#indexbox")
        .addClass("animate__animated animate__fadeOutRight")
        .one("animationend", function () {
          $(this).hide().removeClass("animate__animated animate__fadeOutRight");
        });
    } else {
      $("#indexbox")
        .css("opacity", "0")
        .show()
        .addClass("animate__animated animate__fadeInRight")
        .one("animationend", function () {
          $(this)
            .css("opacity", "1")
            .removeClass("animate__animated animate__fadeInRight");
        });
    }

    $("#ring").fadeOut(200, function () {
      $(this).attr("src", "assets/images/menu.svg").fadeIn(200);
    });

    $(".ring").removeClass("buzzout");
    ringboxClicked = true;
  });

  $(document).click(function (event) {
    if (!$(event.target).closest("#ringbox, #indexbox").length) {
      $("#indexbox")
        .addClass("animate__animated animate__fadeOutRight")
        .one("animationend", function () {
          $(this).hide().removeClass("animate__animated animate__fadeOutRight");
        });
      $("#thishere").animate({ height: 0, opacity: 0 }, 500, function () {
        $(this).remove();
      });
    }
  });

  function jump() {
    $("#2chpt0").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#nowchpt0").offset().top,
        },
        500
      );
    });

    $("#2chpt1").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#nowchpt1").offset().top,
        },
        500
      );
    });

    $("#2chpt2").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#nowchpt2").offset().top,
        },
        500
      );
    });

    $("#2chpt3").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#nowchpt3").offset().top,
        },
        500
      );
    });

    $("#2chpt4").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#nowchpt4").offset().top,
        },
        500
      );
    });

    $("#2chpt5").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#nowchpt5").offset().top,
        },
        500
      );
    });
  }
  jump();

  /* CHARTS */
  function duidie() {
    var dom = document.getElementById("duidie");
    var myChart = echarts.init(dom, null, {
      renderer: "canvas",
      useDirtyRect: false,
    });
    var app = {};

    var option;

    // There should not be negative values in rawData
    const rawData = [
      [29, 25, 35, 13],
      [25, 24, 32, 42],
      [46, 51, 33, 45],
    ];
    const totalData = [];
    for (let i = 0; i < rawData[0].length; ++i) {
      let sum = 0;
      for (let j = 0; j < rawData.length; ++j) {
        sum += rawData[j][i];
      }
      totalData.push(sum);
    }
    const grid = {
      left: "25%",
      right: "25%",
      top: "13%",
      bottom: "13%",
    };
    const series = [
      "需要安全保护但未受到保护",
      "需要安全保护并受到保护",
      "不需要安全保护",
    ].map((name, sid) => {
      return {
        name,
        type: "bar",
        stack: "total",
        barWidth: "80%",
        itemStyle: {
          color: sid === 0 ? "#5700EC" : sid === 1 ? "#96ffe7" : "#00ffc6",
        },
        label: {
          show: true,
          formatter: (params) => Math.round(params.value * 100) + "%",
        },
        data: rawData[sid].map((d, did) =>
          totalData[did] <= 0 ? 0 : d / totalData[did]
        ),
      };
    });
    option = {
      title: [
        {
          text: "数据安全的实际状况",
        },
        {
          subtext: "资料来源：IDC“数据时代2025研究”，希捷赞助，2017年3月",
          subtextStyle: {
            fontSize: 15,
            color: "#333",
          },
          bottom: 0,
          left: "20%",
        },
      ],
      legend: {
        selectedMode: false,
        orient: "vertical",
        top: "middle",
        left: "2%",
      },
      grid,
      yAxis: {
        // type: 'category',
        // data:['111','222','333']
        axisLabel: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
      xAxis: {
        type: "category",
        data: ["2010", "2015", "2020", "2025"],
      },
      series,
    };

    if (option && typeof option === "object") {
      myChart.setOption(option);
    }

    window.addEventListener("resize", myChart.resize);
  }
  duidie();
  function tiktok() {
    var dom = document.getElementById("tiktok");
    var myChart = echarts.init(dom, null, {
      renderer: "canvas",
      useDirtyRect: false,
    });
    var app = {};

    var option;

    option = {
      title: {
        show: true,
        text: "抖音与快手月使用时长（2020年1月-2021年4月）",
        subtext: "单位：万小时",
        subtextStyle: {
          color: "#333",
          fontSize: 13,
        },
      },
      legend: {
        // show:'true',
        // data: ['Forest', 'Steppe']
        orient: "vertical",
        x: "right",
        top: "center",
      },
      xAxis: {
        type: "category",
        data: [
          "2020-01",
          "2020-02",
          "2020-03",
          "2020-04",
          "2020-05",
          "2020-06",
          "2020-07",
          "2020-08",
          "2020-09",
          "2020-10",
          "2020-11",
          "2020-12",
          "2021-01",
          "2021-02-28",
          "2021-03",
          "2021-04",
        ],
        axisLabel: {
          rotate: 45,
        },
      },
      yAxis: {
        type: "value",
        min: 50.0,
        max: 200.0,
        splitNumber: 10.0,
      },
      series: [
        {
          name: "抖音",
          data: [
            117.2, 131.1, 142.1, 141.9, 151.2, 144.4, 131.4, 85.8, 120.6, 154.0,
            160.3, 192.0, 197.7, 184.3, 196.2, 197.7,
          ],
          type: "bar",
          itemStyle: {
            color: "#5300ee",
          },
        },
        {
          name: "快手",
          data: [
            134.2, 142.7, 135.1, 148.4, 153.4, 138.7, 140.0, 125.4, 116.6,
            145.8, 140.4, 134.2, 127.4, 143.3, 131.3, 108.3,
          ],
          type: "bar",
          itemStyle: {
            color: "#00f4ce",
          },
        },
      ],
    };

    if (option && typeof option === "object") {
      myChart.setOption(option);
    }

    window.addEventListener("resize", myChart.resize);
  }
  tiktok();

  /* CHART1 */
  function chart1() {
    var dom = document.getElementById("chart1");
    console.log("DOM element for chart2:", dom);
    var myChart = echarts.init(dom, null, {
      renderer: "canvas",
      useDirtyRect: false,
    });
    console.log("ECharts instance:", myChart);
    console.log("@@@" + myChart);
    var app = {};

    var option;

    option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      title: [
        {
          subtext: "Video Play Count Group",
          left: "center",
          top: "3%",
          subtextStyle: {
            color: "#fff",
          },
        },
        {
          subtext: "2020-11-01",
          bottom: "3%",
          left: "14%",
          subtextStyle: {
            color: "#fff",
          },
        },
        {
          subtext: "2020-11-15",
          bottom: "3%",
          left: "28%",
          subtextStyle: {
            color: "#fff",
          },
        },
        {
          subtext: "2020-12-01",
          bottom: "3%",
          left: "42%",
          subtextStyle: {
            color: "#fff",
          },
        },
        {
          subtext: "2020-12-15",
          bottom: "3%",
          left: "56%",
          subtextStyle: {
            color: "#fff",
          },
        },
        {
          subtext: "2021-01-01",
          bottom: "3%",
          left: "70%",
          subtextStyle: {
            color: "#fff",
          },
        },
        {
          subtext: "2021-01-15",
          bottom: "3%",
          left: "84%",
          subtextStyle: {
            color: "#fff",
          },
        },
      ],
      legend: {
        textStyle: {
          color: "#FFFFFF",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "8%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          axisLabel: {
            show: false,
          },
          name: " ",
          nameTextStyle: {
            fontSize: 13,
            color: "ffffff",
          },
          // textStyle: {
          //   color: "ffffff",
          // },
          nameLocation: "middle",
          nameGap: 25,
        },
      ],
      yAxis: [
        {
          type: "value",
          min: 0.0,
          max: 0.04,
          interval: 0.005,
          axisLabel: {
            color: "#fff",
          },
          name: "Desnity",
          nameTextStyle: {
            fontSize: 13,
            color: "#fff",
          },
          nameRotate: 90,
          nameLocation: "middle",
          nameGap: 38,
        },
      ],
      series: [
        {
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          itemStyle: {
            color: "grey",
          },
          data: [
            0.0002, 0.0005, 0.0007, 0.0006, 0.0013, 0.0009, 0.0014, 0.0005,
            0.0014, 0.0019, 0.0022, 0.0009, 0.0019, 0.0023, 0.002, 0.0016,
            0.0004, 0.0031, 0.0027, 0.0021, 0.0015, 0.003, 0.0027, 0.0027,
            0.0016, 0.0031, 0.0035, 0.004, 0.0029, 0.0055, 0.005, 0.0062,
            0.0075, 0.0046, 0.0118, 0.0136, 0.0147, 0.007, 0.0156, 0.0153, 0.02,
            0.0112, 0.0222, 0.0254, 0.0284, 0.0276, 0.0152, 0.0282, 0.0339,
            0.0244, 0.0144, 0.0208, 0.0152, 0.0151, 0.0056, 0.0096, 0.0061,
            0.0017, 0.0002,
          ],
        },
        {
          name: "剩余90%的视频",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          itemStyle: {
            color: "#5700EC",
          },
          data: [
            0.0002, 0.0003, 0.0009, 0.0003, 0.0011, 0, 0.0007, 0, 0, 0, 0,
            0.0005, 0.0004, 0.0006, 0, 0, 0, 0.002, 0.0006, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0.0, 0.0, 0, 0, 0, 0, 0.0026, 0.0036, 0.0039, 0.0081,
            0.0094, 0.0076, 0.0054, 0.0107, 0.008, 0.0046, 0.0066, 0.0011,
            0.0027, 0.0039, 0, 0, 0, 0, 0, 0, 0,
          ],
        },
        {
          name: "前10%的热门视频",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          itemStyle: {
            color: "#00F8D3",
          },
          data: [
            0, 0, 0, 0, 0, 0.001, 0.002, 0.0005, 0.0007, 0.001, 0, 0, 0, 0,
            0.0005, 0.0009, 0.0011, 0, 0, 0.0006, 0, 0.0003, 0.0005, 0, 0,
            0.0005, 0.0006, 0.0001, 0.0002, 0.0007, 0.0016, 0.0009, 0.0015,
            0.0009, 0.0005, 0, 0.0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0,
            0.0088, 0.0006, 0.0043, 0.0066, 0.0083, 0.0064, 0.0105, 0.0106,
            0.0132, 0.0028,
          ],
        },
      ],
    };
    console.log("Chart option:", option);
    if (option && typeof option === "object") {
      myChart.setOption(option);
      console.log("Chart option applied:", option);
    }

    window.addEventListener("resize", myChart.resize);
    var chartRendered = myChart.getDom().innerHTML;
    console.log("Chart rendered content:", chartRendered);
  }
  chart1();
  /* CHART2 */

  /* CHART3 */
  function chart3() {
    var dom = document.getElementById("chart3");
    var myChart = echarts.init(dom, null, {
      renderer: "canvas",
      useDirtyRect: false,
    });
    var app = {};

    var option;

    option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        data: ["前10%的热门视频", "剩余90%的视频"],
        textStyle: {
          color: "#fff",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "0%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "value",
          min: -1.25,
          max: 1.25,
          interval: 0.25,
          axisLabel: {
            color: "#fff",
          },
        },
      ],
      yAxis: [
        {
          type: "category",
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            color: "#fff",
            // rotate:45
          },
          name: "视频的计数比例",
          nameTextStyle: {
            fontSize: 16,
            color: "#fff",
            padding: [0, 0, 0, -600],
          },
          data: [
            "恋爱中",
            "每日视频日志",
            /* "欢迎2021",
            "护肤",
            "搞笑",
            "抖音上的狗狗",
            "我的日常",
            "再见2020", */
            "你应该知道",
            "自制",
            "圣诞节",
            "电影",
            "我的收获",
            "胖人崛起",
            "在抖音上学习",
            "抖音上的妈妈们",
            "有趣",
            "情侣必去",
            "食物",
            "可爱",
            "爱",
            "抖音年度",
            "恶作剧",
            "喜剧",
            /* "家庭",
            "绿幕视频",
            "穆南约",
            "狗狗",
            "绘画",
            "动画", */
            "柴兹伯拉克",
            "谜之满足感",
            "挑战视频",
            "搞笑视频",
            "别这么做",
            "绘画",
            "2020圣诞节",
            "手工",
            "ASMR",
            "狗",
            "乐趣",
            "满足感",
            "我的世界",
            /*  "教程",
            "轻松家庭",
            "猫猫",
            "绘画",
            "微小的事", */
          ],
        },
      ],
      series: [
        {
          name: "剩余90%的视频",
          type: "bar",
          stack: "Total",
          label: {
            show: false,
          },
          emphasis: {
            focus: "series",
          },
          itemStyle: {
            color: "#5700EC",
          },
          data: [
            0.206, 0.248, 0.265, 0.202, 0.314, 0.241, 0.223, 0.283, 0.216,
            0.227, 0.283, 0.255, 0.167, 0.083, 0.244, 0.258, 0.23, 0.258, 0.363,
            0.276, 0.402, 0.255, 0.139, 0.3008, 0.699, 0.409, 0.241, 0.195,
            0.073, 0.328, 0.685, 0.178, 0.157, 0.517, 0.199, 0.164, 0.178,
            0.646, 0.185, 0.405, 0.768, 0.325, 1.139, 0.824, 0.111, 0.223,
            0.171, 0.199, 0.402, 0.262,
          ],
        },
        {
          name: "前10%的热门视频",
          type: "bar",
          stack: "Total",
          label: {
            show: false,
            position: "left",
          },
          emphasis: {
            focus: "series",
          },
          itemStyle: {
            color: "#00F8D3",
          },
          data: [
            -0.13, -0.14, -0.168, -0.119, -0.116, -0.168, -0.105, -0.221,
            -0.133, -0.119, -0.119, -0.234, -0.109, -0.102, -0.161, -0.13,
            -0.133, -0.116, -0.116, -0.116, -0.238, -0.161, -0.102, -0.276,
            -0.584, -0.713, -0.168, -0.116, -0.329, -0.102, -0.161, -0.193,
            -0.353, -0.259, -0.133, -0.102, -0.151, -0.311, -0.133, -0.21,
            -0.4728, -0.332, -1.133, -0.566, -0.109, -0.441, -0.437, -0.151,
            -0.172, -0.165,
          ],
        },
      ],
    };

    if (option && typeof option === "object") {
      myChart.setOption(option);
    }

    window.addEventListener("resize", myChart.resize);
  }
  chart3();
  /* CHART4 */

  /* CHART5 */
  function chart5() {
    var dom = document.getElementById("chart5");
    var myChart = echarts.init(dom, null, {
      renderer: "canvas",
      useDirtyRect: false,
    });
    var app = {};

    var option;

    option = {
      // tooltip: {
      //   trigger: 'axis',
      //   axisPointer: {
      //     type: 'shadow'
      //   }
      // },
      title: {
        subtext: "",
        left: "center",
        top: "3%",
      },
      legend: {
        textStyle: {
          color: "#fff",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          // data:['0','5','10','15','20'],
          name: "",
          nameTextStyle: {
            fontSize: 13,
            color: "#fff",
          },
          axisLabel: {
            color: "#fff",
          },
          nameLocation: "middle",
          nameGap: 25,
        },
      ],
      yAxis: [
        {
          type: "value",
          min: 0.0,
          max: 0.08,
          interval: 0.01,
          axisLabel: {
            color: "#fff",
          },
          name: "视频热度值",
          nameTextStyle: {
            fontSize: 13,
            color: "#fff",
          },
          nameRotate: 90,
          nameLocation: "middle",
          nameGap: 38,
        },
      ],
      series: [
        {
          type: "bar",
          stack: "Ad",
          // emphasis: {
          //   focus: 'series'
          // },
          itemStyle: {
            color: "grey",
          },
          data: [
            0.058, 0.063, 0.059, 0.055, 0.041, 0.026, 0.022, 0.017, 0.013, 0.01,
            0.009, 0.013, 0.013, 0.018, 0.028, 0.04, 0.052, 0.055, 0.059, 0.066,
            0.069, 0.055, 0.059, 0.067,
          ],
        },
        {
          name: "剩余90%的视频",
          type: "bar",
          stack: "Ad",
          // emphasis: {
          //   focus: 'series'
          // },
          itemStyle: {
            color: "#5700EC",
          },
          data: [
            0.014, 0.012, 0.008, 0.003, 0.001, 0.005, -0.0, -0.001, -0.003,
            -0.003, -0.006, -0.018, -0.007, -0.005, -0.005, -0.006, -0.008,
            0.003, 0.004, -0.001, -0.003, 0.014, 0.0093, -0.007,
          ],
        },
        {
          name: "前10%的热门视频",
          type: "bar",
          stack: "Ad",
          // emphasis: {
          //   focus: 'series'
          // },
          itemStyle: {
            color: "#00F8D3",
          },
          data: [
            0, 0, 0, 0, 0, 0, 0.0, 0.001, 0.003, 0.003, 0.006, 0.018, 0.007,
            0.005, 0.005, 0.006, 0.008, 0, 0, 0.001, 0.003, 0, 0, 0.007,
          ],
        },
      ],
    };

    if (option && typeof option === "object") {
      myChart.setOption(option);
    }

    window.addEventListener("resize", myChart.resize);
  }
  chart5();

  /* GETCHART */
  function getchart(a, b) {
    const aElement = document.getElementById(a);
    const bElement = document.getElementById(b);
    const style = document.createElement("style");
    style.innerHTML = `
          .fadein {
              animation: fadein 0.5s forwards;
          }
          .fadeout {
              animation: fadeout 0.5s forwards;
          }
          @keyframes fadein {
              from { opacity: 0; }
              to { opacity: 1; }
          }
          @keyframes fadeout {
              from { opacity: 1; }
              to { opacity: 0; }
          }
      `;
    document.head.appendChild(style);

    aElement.addEventListener("click", () => {
      bElement.classList.remove("fadeout");
      bElement.classList.add("fadein");
      bElement.style.display = "flex";
      bElement.style.alignItems = "center";
      bElement.style.flexDirection = "column";
      bElement.style.top = "50%";
      bElement.style.left = "50%";
      bElement.style.transform = "translate(-50%, -50%)";
      bElement.style.opacity = "1";
      bElement.style.zIndex = "1000";
      document.body.classList.add("noscroll");
      aElement.classList.add("a-element-active");
    });
    bElement.addEventListener("click", () => {
      bElement.classList.remove("fadein");
      bElement.classList.add("fadeout");
      setTimeout(() => {
        bElement.style.display = "none";
      }, 500);
      document.body.classList.remove("noscroll");
      /*    aElement.classList.remove("a-element-active"); */
    });
  }
  getchart("getchart1", "card1");
  getchart("getchart2", "card2");
  getchart("getchart3", "card3");
  getchart("getchart4", "card4");
  getchart("getchart5", "card5");

  /* PSCHART */
  function getdensitymap() {
    var margin = { top: 20, right: 30, bottom: 50, left: 50 },
      width = 300 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

    function createDensityMap(cityType, divId) {
      var svg = d3
        .select("#" + divId)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      d3.json(
        "http://sys-picgogo.oss-cn-beijing.aliyuncs.com/data/5.json",
        function (data) {
          var filteredData = data.filter(function (d) {
            return d.city === cityType;
          });

          var x = d3.scaleLinear().domain([0, 0.8]).range([0, width]);

          var xAxis = svg
            .append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).tickSize(0));

          xAxis
            .selectAll("text")
            .style("font-family", "微软雅黑")
            .style("font-size", "10px")
            .style("fill", "#FFFFFF")
            .attr("dy", "13px");

          xAxis.selectAll("path, line").style("stroke", "#FFFFFF");

          svg
            .append("text")
            .attr("text-anchor", "end")
            .attr("x", width / 2 + margin.left + 80)
            .attr("y", height + margin.top + 20)
            .text("信息密度指数")
            .style("font-size", "15px")
            .style("fill", "#FFFFFF");

          var y = d3.scaleLinear().domain([0, 0.8]).range([height, 0]);

          var yAxis = svg.append("g").call(d3.axisLeft(y).tickSize(0));

          yAxis
            .selectAll("text")
            .style("font-family", "微软雅黑")
            .style("font-size", "10px")
            .style("fill", "#FFFFFF")
            .attr("dx", "-5px");

          yAxis.selectAll("path, line").style("stroke", "#FFFFFF");

          yAxis
            .selectAll("text")
            .filter(function (d) {
              return d === 0;
            })
            .remove();

          svg
            .append("text")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-90)")
            .attr("x", -height / 2 + margin.bottom + 80)
            .attr("y", -margin.left + 15)
            .text("严肃指数")
            .style("font-family", "微软雅黑")
            .style("font-size", "15px")
            .style("fill", "#FFFFFF");

          var color = d3
            .scaleLinear()
            .domain([0, 0.1, 0.4, 0.1, 0.5])
            .range(["#faccff", "#845ec2", "#4ffbdf", "#fefedf", "#00c9a7"]);

          var densityData = d3
            .contourDensity()
            .x(function (d) {
              return x(d.info_density);
            })
            .y(function (d) {
              return y(d.seriousness);
            })
            .size([width, height])
            .bandwidth(10)(filteredData);

          svg
            .insert("g", "g")
            .selectAll("path")
            .data(densityData)
            .enter()
            .append("path")
            .attr("d", d3.geoPath())
            .attr("fill", function (d) {
              return color(d.value);
            })
            .attr("opacity", 0) // Start with opacity 0 for animation
            .transition() // Add transition for the opacity animation
            .duration(2000) // Duration of 2 seconds
            .attr("opacity", 0.5);
        }
      );
    }

    // Create the color scale legend once
    function createColorLegend() {
      var svg = d3
        .select("#densityinter")
        .append("svg")
        .attr("width", 400)
        .attr("height", 100);

      var defs = svg.append("defs");

      var linearGradient = defs
        .append("linearGradient")
        .attr("id", "linear-gradient");

      linearGradient
        .selectAll("stop")
        .data([
          { offset: "0%", color: "#faccff" },
          /*    { offset: "25%", color: "#845ec2" }, */
          { offset: "50%", color: "#845ec2" },
          /*   { offset: "75%", color: "#4ffbdf" }, */
          { offset: "100%", color: "#00c9a7" },
        ])
        .enter()
        .append("stop")
        .attr("offset", function (d) {
          return d.offset;
        })
        .attr("stop-color", function (d) {
          return d.color;
        });

      // Draw the rectangle and fill with gradient
      svg
        .append("rect")
        .attr("x", 50)
        .attr("y", 0)
        .attr("width", 300)
        .attr("height", 20)
        .style("fill", "url(#linear-gradient)");

      // Add labels for the legend
      svg
        .append("text")
        .attr("x", 10)
        .attr("y", 15)
        .text("低密度")
        .style("font-size", "12px")
        .style("fill", "#FFFFFF");

      svg
        .append("text")
        .attr("x", 355)
        .attr("y", 15)
        .text("高密度")
        .style("font-size", "12px")
        .style("fill", "#FFFFFF");
    }

    createColorLegend();

    // Create the density maps
    createDensityMap("T0", "densitymap0");
    createDensityMap("T1", "densitymap1");
    createDensityMap("T2", "densitymap2");
    createDensityMap("T3", "densitymap3");
    createDensityMap("T4", "densitymap4");
    createDensityMap("T5", "densitymap5");
  }
  getdensitymap();

  function getkernel() {
    var margin = { top: 90, right: 30, bottom: 50, left: 110 },
      width = 400 - margin.left - margin.right,
      height = 350 - margin.top - margin.bottom;

    function createChart(divId, csvFile) {
      var svg = d3
        .select("#" + divId)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      d3.csv(csvFile, function (data) {
        var categories = [
          "like_sdize_1",
          "comment_sdlize_1",
          "share_sdlize_1",
          "collect_sdlize_1",
        ];
        var n = categories.length;

        allMeans = [];
        for (i in categories) {
          currentGroup = categories[i];
          mean = d3.mean(data, function (d) {
            return +d[currentGroup];
          });
          allMeans.push(mean);
        }

        var myColor = d3
          .scaleSequential()
          .domain([d3.min(allMeans), d3.max(allMeans)])
          .interpolator(d3.interpolateViridis);

        var x = d3.scaleLinear().domain([0, 4]).range([0, width]);
        svg
          .append("g")
          .attr("class", "xAxis")
          .attr("transform", "translate(0," + height + ")")
          .call(
            d3.axisBottom(x).tickValues([0, 2, 4, 6, 8, 10]).tickSize(-height)
          )
          .selectAll("text")
          .style("fill", "#ffffff")
          .attr("dy", "15px")
          .select(".domain")
          .remove();

        svg
          .append("text")
          .attr("text-anchor", "end")
          .attr("x", width + 10)
          .attr("y", height + 40)
          .attr("font-size", "11px")
          .attr("font-family", "微软雅黑")
          .style("fill", "#ffffff")
          .text("热度指数");

        var y = d3.scaleLinear().domain([0, 7]).range([height, 0]);

        var yName = d3
          .scaleBand()
          .domain(categories)
          .range([0, height])
          .paddingInner(1);

        var yAxis = svg
          .append("g")
          .call(d3.axisLeft(yName).tickSize(0))
          .style("fill", "#ffffff");

        yAxis
          .selectAll(".tick text")
          .text(function (d) {
            switch (d) {
              case "like_sdize_1":
                return "点赞次数";
              case "comment_sdlize_1":
                return "评论次数";
              case "share_sdlize_1":
                return "分享次数";
              case "collect_sdlize_1":
                return "收藏次数";
            }
          })
          .attr("font-size", "11px")
          .attr("font-family", "微软雅黑")
          .style("fill", "#ffffff")
          .attr("transform", "translate(-5, -5)");

        yAxis.select(".domain").remove();

        var kde = kernelDensityEstimator(
          kernelEpanechnikov(0.05),
          x.ticks(100)
        );
        var allDensity = [];
        for (i = 0; i < n; i++) {
          key = categories[i];
          density = kde(
            data.map(function (d) {
              return d[key];
            })
          );
          allDensity.push({ key: key, density: density });
        }

        svg
          .selectAll("areas")
          .data(allDensity)
          .enter()
          .append("path")
          .attr("transform", function (d) {
            return "translate(0," + (yName(d.key) - height) + ")";
          })
          .attr("fill", function (d) {
            switch (d.key) {
              case "like_sdize_1":
                return "#793FDF"; // 修改为793FDF
              case "comment_sdlize_1":
                return "#7091F5"; // 修改为7091F5
              case "share_sdlize_1":
                return "#97FFF4"; // 修改为97FFF4
              case "collect_sdlize_1":
                return "#FFFD8C"; // 修改为FFFD8C
              default:
                return myColor(value); // 保持默认颜色
            }
          })
          .datum(function (d) {
            return d.density;
          })
          .attr("stroke", "#FFFFFF")
          .attr("stroke-width", 0.1)
          .attr(
            "d",
            d3
              .line()
              .curve(d3.curveBasis)
              .x(function (d) {
                return x(d[0]);
              })
              .y(function (d) {
                return y(d[1]);
              })
          )
          .attr("opacity", 0)
          .transition()
          .duration(2000)
          .attr("opacity", 0.7);
      });
    }

    function kernelDensityEstimator(kernel, X) {
      return function (V) {
        return X.map(function (x) {
          return [
            x,
            d3.mean(V, function (v) {
              return kernel(x - v);
            }),
          ];
        });
      };
    }
    function kernelEpanechnikov(k) {
      return function (v) {
        return Math.abs((v /= k)) <= 1 ? (0.9 * (1 - v * v)) / k : 0;
      };
    }

    for (var i = 0; i <= 5; i++) {
      createChart("density" + i, "data/interact/" + i + ".csv");
    }
  }
  getkernel();
  function gotops() {
    console.log("gotops function initiated");

    $("#nowgogo").on("click", function () {
      console.log("#nowgogo clicked");

      $("body").css("overflow", "hidden");
      console.log("Body scroll disabled");

      $("body").animate({ backgroundColor: "#2B2B2B" }, 500);
      console.log("Body background color change initiated");

      $("#postscript")
        .css({ display: "flex", opacity: 0 })
        .animate({ opacity: 1 }, 500, function () {
          console.log("#postscript displayed with opacity 1");
        })
        .removeClass("animate__fadeOut")
        .addClass("animate__animated animate__fadeIn");

      $(".trick")
        .animate({ opacity: 0 }, 500, function () {
          console.log(".trick hidden with opacity 0");
        })
        .removeClass("animate__fadeIn")
        .addClass("animate__animated animate__fadeOut");
    });

    $("#psexit").on("click", function () {
      console.log("#psexit clicked");

      $("#postscript")
        .animate({ opacity: 0 }, 500, function () {
          $(this).css("display", "none");
          console.log("#postscript hidden with opacity 0");
        })
        .removeClass("animate__fadeIn")
        .addClass("animate__animated animate__fadeOut");

      $("body").animate({ backgroundColor: "#FFFFFF" }, 500);
      console.log("Body background color change to #FFFFFF initiated");

      $(".trick")
        .animate({ opacity: 1 }, 500, function () {
          console.log(".trick displayed with opacity 1");
        })
        .removeClass("animate__fadeOut")
        .addClass("animate__fadeIn");

      $("body").css("overflow", "auto");
      console.log("Body scroll enabled");
    });

    $(".control-imagination-boundaries").on("mouseenter", function () {
      $(this).removeClass("buzzout");
      console.log(
        ".buzzout class removed from .control-imagination-boundaries"
      );
    });

    $(".control-imagination-boundaries").on("mouseleave", function () {
      $(this).addClass("buzzout");
      console.log(".buzzout class restored to .control-imagination-boundaries");
    });
  }

  gotops();
});
$(window).on("load", function () {
  $(".loader-container").fadeOut("slow");
});

setTimeout(function () {
  $(".loader-container").fadeOut("slow");
}, 10000);
