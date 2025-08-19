import Image from "next/image";
import outdoorCase1and1 from "@/assets/case/outdoor/case1/1.jpg";
import outdoorCase1and2 from "@/assets/case/outdoor/case1/2.jpg";
import outdoorCase1and3 from "@/assets/case/outdoor/case1/3.jpg";
import outdoorCase1and4 from "@/assets/case/outdoor/case1/4.jpg";

import outdoorCase2and1 from "@/assets/case/outdoor/case2/1.jpg";
import outdoorCase2and2 from "@/assets/case/outdoor/case2/2.jpg";

import outdoorCase3and1 from "@/assets/case/outdoor/case3/1.jpg";
import outdoorCase3and2 from "@/assets/case/outdoor/case3/2.jpg";

import outdoorCase4and1 from "@/assets/case/outdoor/case4/1.jpg";
import outdoorCase4and2 from "@/assets/case/outdoor/case4/2.jpg";
import outdoorCase4and3 from "@/assets/case/outdoor/case4/3.jpg";

import indoorCase1and1 from "@/assets/case/indoor/case1/1.jpg";
import indoorCase1and2 from "@/assets/case/indoor/case1/2.jpg";
import indoorCase1and3 from "@/assets/case/indoor/case1/3.jpg";
import indoorCase1and4 from "@/assets/case/indoor/case1/4.jpg";
import indoorCase1and5 from "@/assets/case/indoor/case1/5.jpg";

import indoorCase2and1 from "@/assets/case/indoor/case2/1.jpg";
import indoorCase2and2 from "@/assets/case/indoor/case2/2.jpg";

import indoorCase3and1 from "@/assets/case/indoor/case3/1.jpg";
import indoorCase3and2 from "@/assets/case/indoor/case3/2.jpg";

import rentalCase1and1 from "@/assets/case/rental/case1/1.jpg";
import rentalCase1and2 from "@/assets/case/rental/case1/2.jpg";

import rentalCase2and1 from "@/assets/case/rental/case2/1.jpg";
import rentalCase2and2 from "@/assets/case/rental/case2/2.jpg";

import softCase1and1 from "@/assets/case/soft/case1/1.jpg";

import softCase2and1 from "@/assets/case/soft/case2/1.jpg";

import softCase3and1 from "@/assets/case/soft/case3/1.jpg";
import softCase3and2 from "@/assets/case/soft/case3/2.jpg";
import softCase3and3 from "@/assets/case/soft/case3/3.jpg";

import { CaseType } from "./_interface";

const Cases: CaseType[] = [
  {
    id: "outdoor-case3",
    type: "outdoor",
    poster: outdoorCase2and1,
    images: [outdoorCase2and1, outdoorCase2and2],
    enTitle: "Shenzhen Art Exhibition Center P3.91 LED Display",
    zhTitle: "深圳艺展中心P3.91显示屏",
    twTitle: "深圳藝展中心 P3.91 顯示屏",
    time: "2025-04-15",
    enNode: (
      <>
        <p>
          As an indispensable display terminal in the digital era, the
          large-scale adoption of P3.91 LED displays has become a trend.
          Leekono's LED display solutions, designed to meet the operational
          needs of enterprises, are widely used in scenarios such as outdoor
          walls, advertising spaces, billboards, and posters—helping enterprises
          achieve digital transformation and upgrading.
        </p>
        <Image alt="img" src={outdoorCase2and1} />
        <Image alt="img" src={outdoorCase2and2} />
        <p>
          With its highly dynamic and futuristic display effects, Shenzhen Art
          Exhibition Center perfectly presents the vitality of Shenzhen.
        </p>
      </>
    ),
    zhNode: (
      <>
        <p>
          作为数字时代不可或缺的显示终端，P3.91
          LED显示屏的大规模应用已成为趋势。雷科诺推出的LED显示解决方案，通过满足企业运营需求，广泛应用于室外墙、广告位、广告牌、海报等场景，助力企业实现数字化转型与升级。
        </p>
        <Image alt="img" src={outdoorCase2and1} />
        <Image alt="img" src={outdoorCase2and2} />
        <p>深圳艺展中心以极具动态感与未来感的展示效果，完美呈现深圳生命力。</p>
      </>
    ),
    twNode: (
      <>
        <p>
          作為數位時代不可或缺的顯示終端，P3.91 LED
          顯示屏的大規模應用已成為趨勢。雷科諾推出的 LED
          顯示解決方案，透過滿足企業營運需求，廣泛應用於室外牆、廣告位、廣告牌、海報等場景，助力企業實現數位轉型與升級。
        </p>
        <Image alt="img" src={outdoorCase2and1} />
        <Image alt="img" src={outdoorCase2and2} />
        <p>深圳藝展中心以極具動態感與未來感的展示效果，完美呈現深圳生命力。</p>
      </>
    ),
  },
  {
    id: "indoor-case1",
    type: "indoor",
    poster: indoorCase1and5,
    images: [
      indoorCase1and1,
      indoorCase1and2,
      indoorCase1and3,
      indoorCase1and4,
      indoorCase1and5,
    ],
    enTitle: "Nanjing indoor P2 LED display",
    zhTitle: "南京室内 P2 LED 显示屏",
    twTitle: "南京室內 P2 LED 顯示屏",
    time: "2025-04-01",
    enNode: (
      <>
        <p>
          Entering the conference room, the P2 indoor small-pitch LED display
          has become a "powerful assistant" for Nanjing ** Co., Ltd. to enhance
          meeting efficiency and reduce office costs. With a high contrast ratio
          of 5000:1, nanosecond-level response speed, and a high refresh rate of
          3840Hz, it delivers clear and delicate image quality, allowing it to
          intuitively, efficiently, and comprehensively display various data,
          icons, images, and other information—achieving "all-in-one-screen
          overview."
        </p>
        <Image alt="img" src={indoorCase1and1} />
        <Image alt="img" src={indoorCase1and2} />
        <p>
          In addition, to ensure the perfect implementation of a one-stop
          solution, Leekono's smart conference room display solution integrates
          multiple display and voice control systems, aiming to achieve
          full-process interconnection, intercommunication, interaction, and
          visualization of meeting workflows. This has created an efficient,
          convenient, and scalable smart conference space for Nanjing ** Co.,
          Ltd.
        </p>
        <Image alt="img" src={indoorCase1and3} />
        <Image alt="img" src={indoorCase1and4} />
        <Image alt="img" src={indoorCase1and5} />
      </>
    ),
    zhNode: (
      <>
        <p>
          走进会议室，P2 室内小间距 LED
          显示屏已成为南京**有限公司提升会议效率、降低办公成本的
          “得力助手”。它具备 5000:1 的高对比度、纳秒级的响应速度以及 3840Hz
          的高刷新率，画质清晰细腻，能够直观、高效且全面地展示各类数据、图标、图像等信息，实现了
          “一屏尽览”。
        </p>
        <Image alt="img" src={indoorCase1and1} />
        <Image alt="img" src={indoorCase1and2} />
        <p>
          此外，为确保一站式解决方案的完美构建，雷科诺研发的智能会议室显示解决方案还集成了多种显示与语音控制系统，
          旨在实现会议流程的全程互联、互通、联动与可视化，为南京 **
          有限公司打造了一个高效便捷、可扩展的智能会议空间。
        </p>
        <Image alt="img" src={indoorCase1and3} />
        <Image alt="img" src={indoorCase1and4} />
        <Image alt="img" src={indoorCase1and5} />
      </>
    ),
    twNode: (
      <>
        <p>
          走進會議室，P2室內小間距LED顯示屏已成為南京**有限公司提升會議效率、降低辦公成本的「得力助手」。
          它具備5000:1的高對比度、奈秒級的反應速度以及3840Hz的高刷新率，
          畫質清晰細膩，能夠直觀、高效且全面地展示各類數據、圖示、圖像等資訊，實現了「一屏盡覽」。
        </p>
        <Image alt="img" src={indoorCase1and1} />
        <Image alt="img" src={indoorCase1and2} />
        <p>
          此外，為確保一站式解決方案的完美建構，雷科諾研發的智能會議室顯示解決方案還集成多種顯示與語音控制系統，
          旨在實現會議流程的全程互聯、互通、聯動與視覺化，為南京 **
          有限公司打造了一個高效便捷、可擴展的智能會議空間。
        </p>
        <Image alt="img" src={indoorCase1and3} />
        <Image alt="img" src={indoorCase1and4} />
        <Image alt="img" src={indoorCase1and5} />
      </>
    ),
  },
  {
    id: "rental-case1",
    type: "rental",
    poster: rentalCase1and2,
    images: [rentalCase1and1, rentalCase1and2],
    enTitle: "Guangzhou stage rental screen",
    zhTitle: "广州某舞台租赁屏幕",
    twTitle: "廣州某舞台租賃屏幕",
    time: "2025-03-14",
    enNode: (
      <>
        <Image alt="img" src={rentalCase1and1} />
        <Image alt="img" src={rentalCase1and2} />
      </>
    ),
    zhNode: (
      <>
        <Image alt="img" src={rentalCase1and1} />
        <Image alt="img" src={rentalCase1and2} />
      </>
    ),
    twNode: (
      <>
        <Image alt="img" src={rentalCase1and1} />
        <Image alt="img" src={rentalCase1and2} />
      </>
    ),
  },
  {
    id: "soft-case1",
    type: "soft",
    poster: softCase1and1,
    images: [softCase1and1],
    enTitle: "A flexible screen in a Hunan restaurant",
    zhTitle: "湖南某餐馆柔软屏",
    twTitle: "湖南某餐館柔軟屏",
    time: "2025-03-07",
    enNode: (
      <>
        <Image alt="img" src={softCase1and1} />
      </>
    ),
    zhNode: (
      <>
        <Image alt="img" src={softCase1and1} />
      </>
    ),
    twNode: (
      <>
        <Image alt="img" src={softCase1and1} />
      </>
    ),
  },
  {
    id: "indoor-case2",
    type: "indoor",
    poster: indoorCase2and2,
    images: [indoorCase2and1, indoorCase2and2],
    enTitle: "Chuanqi Automotive Sales Department indoor LED project",
    zhTitle: "传奇汽车销售部室内LED项目",
    twTitle: "傳奇汽車銷售部室內 LED 項目",
    time: "2025-03-27",
    enNode: (
      <>
        <Image alt="img" src={indoorCase2and1} />
        <Image alt="img" src={indoorCase2and2} />
      </>
    ),
    zhNode: (
      <>
        <Image alt="img" src={indoorCase2and1} />
        <Image alt="img" src={indoorCase2and2} />
      </>
    ),
    twNode: (
      <>
        <Image alt="img" src={indoorCase2and1} />
        <Image alt="img" src={indoorCase2and2} />
      </>
    ),
  },
  {
    id: "soft-case3",
    type: "soft",
    poster: softCase3and3,
    images: [softCase3and1, softCase3and2, softCase3and3],
    enTitle: "Israeli client cylindrical screen",
    zhTitle: "以色列客户圆柱屏",
    twTitle: "以色列客戶圓柱屏幕",
    time: "2025-02-26",
    enNode: (
      <>
        <Image alt="img" src={softCase3and1} />
        <Image alt="img" src={softCase3and2} />
        <Image alt="img" src={softCase3and3} />
      </>
    ),
    zhNode: (
      <>
        <Image alt="img" src={softCase3and1} />
        <Image alt="img" src={softCase3and2} />
        <Image alt="img" src={softCase3and3} />
      </>
    ),
    twNode: (
      <>
        <Image alt="img" src={softCase3and1} />
        <Image alt="img" src={softCase3and2} />
        <Image alt="img" src={softCase3and3} />
      </>
    ),
  },
  {
    id: "soft-case2",
    type: "soft",
    poster: softCase2and1,
    images: [softCase2and1],
    enTitle: "Shanghai bar flexible screen",
    zhTitle: "上海某酒馆柔软屏",
    twTitle: "上海某酒館柔軟屏幕",
    time: "2025-02-21",
    enNode: (
      <>
        <Image alt="img" src={softCase2and1} />
      </>
    ),
    zhNode: (
      <>
        <Image alt="img" src={softCase2and1} />
      </>
    ),
    twNode: (
      <>
        <Image alt="img" src={softCase2and1} />
      </>
    ),
  },
  {
    id: "indoor-case3",
    type: "indoor",
    poster: indoorCase3and2,
    images: [indoorCase3and1, indoorCase3and2],
    enTitle: "Xiamen hotel indoor screen",
    zhTitle: "厦门某酒店室内屏",
    twTitle: "廈門某酒店室內屏幕",
    time: "2025-02-08",
    enNode: (
      <>
        <Image alt="img" src={indoorCase3and1} />
        <Image alt="img" src={indoorCase3and2} />
      </>
    ),
    zhNode: (
      <>
        <Image alt="img" src={indoorCase3and1} />
        <Image alt="img" src={indoorCase3and2} />
      </>
    ),
    twNode: (
      <>
        <Image alt="img" src={indoorCase3and1} />
        <Image alt="img" src={indoorCase3and2} />
      </>
    ),
  },
  {
    id: "outdoor-case1",
    type: "outdoor",
    poster: outdoorCase1and4,
    images: [
      outdoorCase1and1,
      outdoorCase1and2,
      outdoorCase1and3,
      outdoorCase1and4,
    ],
    enTitle: "Shanwei outdoor LED screen",
    zhTitle: "汕尾某户外LED屏",
    twTitle: "汕尾某戶外 LED 屏幕",
    time: "2025-02-07",
    enNode: (
      <>
        <Image alt="img" src={outdoorCase1and1} />
        <Image alt="img" src={outdoorCase1and2} />
        <Image alt="img" src={outdoorCase1and3} />
        <Image alt="img" src={outdoorCase1and4} />
      </>
    ),
    zhNode: (
      <>
        <Image alt="img" src={outdoorCase1and1} />
        <Image alt="img" src={outdoorCase1and2} />
        <Image alt="img" src={outdoorCase1and3} />
        <Image alt="img" src={outdoorCase1and4} />
      </>
    ),
    twNode: (
      <>
        <Image alt="img" src={outdoorCase1and1} />
        <Image alt="img" src={outdoorCase1and2} />
        <Image alt="img" src={outdoorCase1and3} />
        <Image alt="img" src={outdoorCase1and4} />
      </>
    ),
  },
  {
    id: "rental-case2",
    type: "rental",
    poster: rentalCase2and1,
    images: [rentalCase2and1, rentalCase2and2],
    enTitle: "Foshan stadium rental screen",
    zhTitle: "佛山某体育场租赁屏",
    twTitle: "佛山某體育場租賃屏幕",
    time: "2025-01-21",
    enNode: (
      <>
        <Image alt="img" src={rentalCase2and1} />
        <Image alt="img" src={rentalCase2and2} />
      </>
    ),
    zhNode: (
      <>
        <Image alt="img" src={rentalCase2and1} />
        <Image alt="img" src={rentalCase2and2} />
      </>
    ),
    twNode: (
      <>
        <Image alt="img" src={rentalCase2and1} />
        <Image alt="img" src={rentalCase2and2} />
      </>
    ),
  },
  // {
  //   id: "outdoor-case2",
  //   type: "outdoor",
  //   poster: outdoorCase3and1,
  //   images: [outdoorCase3and1, outdoorCase3and2],
  //   enTitle: "The LED Display Screen Project in Meilong Shanghai",
  //   zhTitle: "深圳工业区",
  //   twTitle: "",
  //   time: "2025-01-13",
  //   enNode:
  //     "The outdoor LED display screen project in Meilong Shanghai, Shanghai, China.",
  //   zhNode: (
  //     <>
  //       <Image alt='img' src={indoorCase3and1} />
  //       <Image alt='img' src={indoorCase3and2} />
  //     </>
  //   ),
  //   twNode: "",
  // },
  // {
  //   id: "outdoor-case4",
  //   type: "outdoor",
  //   poster: outdoorCase4and3,
  //   images: [outdoorCase4and1, outdoorCase4and2, outdoorCase4and3],
  //   enTitle: "The LED Display Screen Project in Meilong Shanghai",
  //   zhTitle: "武汉某商场户外led屏",
  //   twTitle: "",
  //   time: "2025-01-04",
  //   enNode:
  //     "The outdoor LED display screen project in Meilong Shanghai, Shanghai, China.",
  //   zhNode: (
  //     <>
  //       <Image alt='img' src={indoorCase3and1} />
  //       <Image alt='img' src={indoorCase3and2} />
  //     </>
  //   ),
  //   twNode: "",
  // },
];

export { Cases };
