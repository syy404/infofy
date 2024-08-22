document.addEventListener("DOMContentLoaded", function () {
  var rellax = new Rellax(".rellax");
  ScrollReveal().reveal('.reveal');
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
  addme(".text-7e", "animate-hang");
  addme(".text-82", "animate-hang");
  addme(".text-8f", "animate-hang");
  addme(".text-93", "animate-hang");
  addme(".text-97", "animate-hang");

  addme(".text-7e", "glow-animation");
  addme(".text-82", "glow-animation");
  addme(".text-8f", "glow-animation");
  addme(".text-93", "glow-animation");
  addme(".text-97", "glow-animation");
  /* MENU */
  let ringboxClicked = false;

  $("#ringbox").click(function () {
    if ($("#indexbox").is(":visible")) {
      $("#indexbox").fadeOut(500, function () {
        $("#indexbox").css("opacity", "0");
      });
    } else {
      $("#indexbox")
        .css("opacity", "0")
        .fadeIn(500, function () {
          $("#indexbox").css("opacity", "1");
        });
    }
    $("#ring").attr("src", "assets/images/menu.svg");
    $(".ring").removeClass("buzzout");
    ringboxClicked = true;
  });

  $(document).click(function (event) {
    if (!$(event.target).closest("#ringbox, #indexbox").length) {
      $("#indexbox").fadeOut(500, function () {
        $("#indexbox").css("opacity", "0");
      });
      $("#thishere").remove();
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
});
