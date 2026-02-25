import Image from "next/image";
import outdoorCase1and1 from "@/assets/case/outdoor/case1/1.jpg";
import outdoorCase1and2 from "@/assets/case/outdoor/case1/2.jpg";
import outdoorCase1and3 from "@/assets/case/outdoor/case1/3.jpg";
import outdoorCase1and4 from "@/assets/case/outdoor/case1/4.jpg";

import outdoorCase2and1 from "@/assets/case/outdoor/case2/1.jpg";
import outdoorCase2and2 from "@/assets/case/outdoor/case2/2.jpg";

// import outdoorCase3and1 from "@/assets/case/outdoor/case3/1.jpg";
// import outdoorCase3and2 from "@/assets/case/outdoor/case3/2.jpg";

// import outdoorCase4and1 from "@/assets/case/outdoor/case4/1.jpg";
// import outdoorCase4and2 from "@/assets/case/outdoor/case4/2.jpg";
// import outdoorCase4and3 from "@/assets/case/outdoor/case4/3.jpg";

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
          overview." Leekonos LED display solutions, designed to meet the
          operational needs of enterprises, are widely used in scenarios such as
          outdoor walls, advertising spaces, billboards, and posters—helping
          enterprises achieve digital transformation and upgrading.
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
          "得力助手"。它具备 5000:1 的高对比度、纳秒级的响应速度以及 3840Hz
          的高刷新率，画质清晰细腻，能够直观、高效且全面地展示各类数据、图标、图像等信息，实现了
          "一屏尽览"。
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
        <p>
          This project provided a high-definition LED rental screen solution for a large-scale stage performance in Guangzhou. The customer required a display that could deliver vivid, high-brightness visuals to an audience of over 5,000 in an open-air venue. We deployed Leekono P3.91 rental LED panels featuring quick-lock installation, allowing the entire 60-square-meter screen to be assembled in just 4 hours. The display achieved 5500 nits brightness with a 3840Hz refresh rate, ensuring flicker-free performance under stage lighting and professional camera capture. The modular cabinet design enabled flexible curved configurations to match the stage's arc-shaped backdrop, creating an immersive visual experience that elevated the entire show.
        </p>
        <Image alt="img" src={rentalCase1and1} />
        <Image alt="img" src={rentalCase1and2} />
      </>
    ),
    zhNode: (
      <>
        <p>
          本项目为广州一场大型舞台演出提供了高清LED租赁屏解决方案。客户需要一块能在露天场地为超过5000名观众呈现鲜艳、高亮度画面的显示屏。我们部署了雷科诺P3.91租赁LED面板，采用快速锁扣安装设计，整块60平方米的屏幕仅用4小时即完成搭建。显示屏亮度达5500尼特，刷新率3840Hz，在舞台灯光和专业摄像机拍摄下均无闪烁。模块化箱体设计支持灵活的弧形拼接，与舞台弧形背景完美契合，打造出沉浸式视觉体验，为整场演出增色不少。
        </p>
        <Image alt="img" src={rentalCase1and1} />
        <Image alt="img" src={rentalCase1and2} />
      </>
    ),
    twNode: (
      <>
        <p>
          本項目為廣州一場大型舞台演出提供了高清LED租賃屏解決方案。客戶需要一塊能在露天場地為超過5000名觀眾呈現鮮豔、高亮度畫面的顯示屏。我們部署了雷科諾P3.91租賃LED面板，採用快速鎖扣安裝設計，整塊60平方米的屏幕僅用4小時即完成搭建。顯示屏亮度達5500尼特，刷新率3840Hz，在舞台燈光和專業攝影機拍攝下均無閃爍。模組化箱體設計支援靈活的弧形拼接，與舞台弧形背景完美契合，打造出沉浸式視覺體驗，為整場演出增色不少。
        </p>
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
        <p>
          A popular restaurant in Hunan sought to create a unique dining atmosphere that would set it apart from competitors. We installed Leekono soft LED modules along the curved ceiling and irregular wall surfaces of the dining area. The flexible panels, with a thickness of just 12mm and a bending radius as small as 500mm, seamlessly conformed to the restaurant's architectural curves. Displaying dynamic animations of flowing lava, blooming flowers, and starry skies that change with dining themes, the screens transform the space into an immersive visual feast. Since installation, the restaurant has seen a 40% increase in social media check-ins, with the LED display becoming a signature feature that attracts diners from across the city.
        </p>
        <Image alt="img" src={softCase1and1} />
      </>
    ),
    zhNode: (
      <>
        <p>
          湖南一家热门餐馆希望打造独特的用餐氛围，从竞争对手中脱颖而出。我们在餐厅弧形天花板和不规则墙面上安装了雷科诺柔软LED模组。柔性面板厚度仅12mm，最小弯曲半径可达500mm，完美贴合餐厅建筑曲线。屏幕展示流动的熔岩、绽放的花朵和璀璨星空等动态画面，随用餐主题切换，将整个空间变成一场沉浸式视觉盛宴。自安装以来，餐厅的社交媒体打卡量增长了40%，LED显示屏已成为吸引全城食客前来体验的标志性亮点。
        </p>
        <Image alt="img" src={softCase1and1} />
      </>
    ),
    twNode: (
      <>
        <p>
          湖南一家熱門餐館希望打造獨特的用餐氛圍，從競爭對手中脫穎而出。我們在餐廳弧形天花板和不規則牆面上安裝了雷科諾柔軟LED模組。柔性面板厚度僅12mm，最小彎曲半徑可達500mm，完美貼合餐廳建築曲線。螢幕展示流動的熔岩、綻放的花朵和璀璨星空等動態畫面，隨用餐主題切換，將整個空間變成一場沉浸式視覺盛宴。自安裝以來，餐廳的社交媒體打卡量增長了40%，LED顯示屏已成為吸引全城食客前來體驗的標誌性亮點。
        </p>
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
        <p>
          Chuanqi Automotive's sales showroom required a premium display solution that could showcase vehicle details with stunning clarity and reinforce the brand's high-end image. We provided a Leekono P2.5 indoor LED display measuring 4.8m × 2.4m, installed behind the main reception area. The fine pixel pitch delivers true-to-life color reproduction with a wide color gamut covering 95% of the NTSC standard, making every vehicle model and promotional video appear vibrant and lifelike. The display features automatic brightness adjustment that adapts to the showroom's ambient lighting throughout the day, ensuring comfortable viewing for customers. This digital centerpiece has become a key sales tool, enabling dynamic product presentations and enhancing the overall customer experience.
        </p>
        <Image alt="img" src={indoorCase2and1} />
        <Image alt="img" src={indoorCase2and2} />
      </>
    ),
    zhNode: (
      <>
        <p>
          传奇汽车销售展厅需要一套高端显示解决方案，以超清画质展示车辆细节，同时强化品牌的高端形象。我们提供了一块4.8m×2.4m的雷科诺P2.5室内LED显示屏，安装在主接待区后方。精细的像素间距带来逼真的色彩还原，广色域覆盖NTSC标准的95%，让每一款车型展示和宣传视频都显得鲜艳而生动。显示屏具备自动亮度调节功能，可根据展厅全天的环境光线自动适配，确保客户始终获得舒适的视觉体验。这块数字化核心屏幕已成为重要的销售工具，支持动态产品演示，全面提升了客户的到店体验。
        </p>
        <Image alt="img" src={indoorCase2and1} />
        <Image alt="img" src={indoorCase2and2} />
      </>
    ),
    twNode: (
      <>
        <p>
          傳奇汽車銷售展廳需要一套高端顯示解決方案，以超清畫質展示車輛細節，同時強化品牌的高端形象。我們提供了一塊4.8m×2.4m的雷科諾P2.5室內LED顯示屏，安裝在主接待區後方。精細的像素間距帶來逼真的色彩還原，廣色域覆蓋NTSC標準的95%，讓每一款車型展示和宣傳影片都顯得鮮豔而生動。顯示屏具備自動亮度調節功能，可根據展廳全天的環境光線自動適配，確保客戶始終獲得舒適的視覺體驗。這塊數位化核心螢幕已成為重要的銷售工具，支援動態產品演示，全面提升了客戶的到店體驗。
        </p>
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
        <p>
          An Israeli client commissioned a custom cylindrical LED display for the lobby of a commercial complex in Tel Aviv. The project demanded a 360-degree seamless viewing experience on a 1.2-meter diameter column standing 3 meters tall. We utilized Leekono's soft LED modules with P2.5 pixel pitch, which were precision-curved and assembled into a complete cylinder. The screen's ultra-thin profile of just 15mm ensured a sleek, modern aesthetic. Displaying rotating brand advertisements and artistic animations, the cylinder has become the visual centerpiece of the lobby. The client praised the display's uniform brightness from all viewing angles and its energy-efficient design, consuming 30% less power than comparable solutions on the market.
        </p>
        <Image alt="img" src={softCase3and1} />
        <Image alt="img" src={softCase3and2} />
        <Image alt="img" src={softCase3and3} />
      </>
    ),
    zhNode: (
      <>
        <p>
          一位以色列客户委托定制一块圆柱形LED显示屏，用于特拉维夫一座商业综合体的大堂。项目要求在一根直径1.2米、高3米的立柱上实现360度无缝观看体验。我们采用雷科诺P2.5像素间距的柔软LED模组，经过精密弯曲后拼装成完整圆柱。屏幕超薄厚度仅15mm，确保了简洁现代的外观。圆柱屏播放轮播品牌广告和艺术动画，已成为大堂的视觉焦点。客户对屏幕在各个观看角度均匀的亮度表现以及节能设计给予了高度评价，其功耗比市场同类方案低30%。
        </p>
        <Image alt="img" src={softCase3and1} />
        <Image alt="img" src={softCase3and2} />
        <Image alt="img" src={softCase3and3} />
      </>
    ),
    twNode: (
      <>
        <p>
          一位以色列客戶委託定製一塊圓柱形LED顯示屏，用於特拉維夫一座商業綜合體的大堂。項目要求在一根直徑1.2米、高3米的立柱上實現360度無縫觀看體驗。我們採用雷科諾P2.5像素間距的柔軟LED模組，經過精密彎曲後拼裝成完整圓柱。螢幕超薄厚度僅15mm，確保了簡潔現代的外觀。圓柱屏播放輪播品牌廣告和藝術動畫，已成為大堂的視覺焦點。客戶對螢幕在各個觀看角度均勻的亮度表現以及節能設計給予了高度評價，其功耗比市場同類方案低30%。
        </p>
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
        <p>
          A trendy bar in Shanghai wanted to create an eye-catching interior that would go viral on social media. We installed Leekono flexible LED panels along the DJ booth's curved wall and across the wave-shaped ceiling above the dance floor. The P4 soft modules, each weighing just 4.5kg per square meter, were mounted on custom-bent aluminum frames without adding structural load. The display system runs synchronized content across all surfaces—pulsing neon waves during electronic sets and cascading rain effects during chill-out sessions—all controlled via a wireless tablet interface. The bar owner reported a significant boost in weekend reservations after the installation, with guests frequently sharing videos of the LED environment on social media platforms.
        </p>
        <Image alt="img" src={softCase2and1} />
      </>
    ),
    zhNode: (
      <>
        <p>
          上海一家潮流酒馆希望打造一个引爆社交媒体的夺目内饰空间。我们在DJ台弧形墙面和舞池上方波浪形天花板上安装了雷科诺柔软LED面板。P4柔性模组每平方米重量仅4.5公斤，安装在定制弯曲的铝合金框架上，不增加建筑结构负荷。显示系统在所有表面同步运行内容——电子音乐时呈现脉动霓虹波浪，休闲时段则展示倾泻雨幕效果——全部通过无线平板界面控制。酒馆老板表示安装后周末预约量大幅提升，顾客们频繁在社交媒体平台分享LED灯光环境的视频。
        </p>
        <Image alt="img" src={softCase2and1} />
      </>
    ),
    twNode: (
      <>
        <p>
          上海一家潮流酒館希望打造一個引爆社交媒體的奪目內飾空間。我們在DJ台弧形牆面和舞池上方波浪形天花板上安裝了雷科諾柔軟LED面板。P4柔性模組每平方米重量僅4.5公斤，安裝在定製彎曲的鋁合金框架上，不增加建築結構負荷。顯示系統在所有表面同步運行內容——電子音樂時呈現脈動霓虹波浪，休閒時段則展示傾瀉雨幕效果——全部透過無線平板介面控制。酒館老闆表示安裝後週末預約量大幅提升，顧客們頻繁在社交媒體平台分享LED燈光環境的影片。
        </p>
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
        <p>
          A luxury hotel in Xiamen partnered with Leekono to install a large-format indoor LED display in its grand lobby. The P2 fine-pitch screen, measuring 6m × 3m, serves as a digital art wall that greets guests upon arrival. By day, it showcases Xiamen's iconic coastal landscapes and cultural heritage in stunning 4K resolution. By night, it transitions to abstract art and ambient visuals that complement the lobby's warm lighting. The display's 160-degree wide viewing angle ensures perfect visibility from the entrance, lounge area, and reception desk alike. Hotel management noted that the LED wall has significantly enhanced the property's premium feel, with guests frequently pausing to admire the visual content, extending their dwell time in the lobby by an average of 15 minutes.
        </p>
        <Image alt="img" src={indoorCase3and1} />
        <Image alt="img" src={indoorCase3and2} />
      </>
    ),
    zhNode: (
      <>
        <p>
          厦门一家高端酒店与雷科诺合作，在其豪华大堂安装了一块大尺寸室内LED显示屏。这块6m×3m的P2小间距屏幕作为数字艺术墙，在客人到达时迎接他们。白天展示厦门标志性的海岸风光和文化遗产，以惊艳的4K分辨率呈现；夜晚则切换为抽象艺术和氛围画面，与大堂温暖的灯光相得益彰。显示屏160度的宽视角确保从入口、休息区和前台均可完美观看。酒店管理层表示，LED墙显著提升了酒店的高端质感，客人们经常驻足欣赏视觉内容，在大堂的平均停留时间延长了15分钟。
        </p>
        <Image alt="img" src={indoorCase3and1} />
        <Image alt="img" src={indoorCase3and2} />
      </>
    ),
    twNode: (
      <>
        <p>
          廈門一家高端酒店與雷科諾合作，在其豪華大堂安裝了一塊大尺寸室內LED顯示屏。這塊6m×3m的P2小間距螢幕作為數位藝術牆，在客人到達時迎接他們。白天展示廈門標誌性的海岸風光和文化遺產，以驚豔的4K解析度呈現；夜晚則切換為抽象藝術和氛圍畫面，與大堂溫暖的燈光相得益彰。顯示屏160度的寬視角確保從入口、休息區和前台均可完美觀看。酒店管理層表示，LED牆顯著提升了酒店的高端質感，客人們經常駐足欣賞視覺內容，在大堂的平均停留時間延長了15分鐘。
        </p>
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
        <p>
          Located in a bustling commercial district of Shanwei, this outdoor LED project required a display that could withstand the coastal city's humid climate and strong sunlight while delivering impactful advertising content. We installed a Leekono P5 outdoor LED screen measuring 8m × 4m on the exterior wall of a major shopping center. The IP65-rated panels provide full protection against rain, dust, and salt spray, ensuring reliable operation year-round. With a peak brightness of 7000 nits, the display maintains vibrant visibility even under direct tropical sunlight. The screen is managed through Leekono's cloud-based content management system, allowing the property owner to schedule and update advertisements remotely. This installation has transformed the building facade into a high-value advertising platform attracting premium tenants.
        </p>
        <Image alt="img" src={outdoorCase1and1} />
        <Image alt="img" src={outdoorCase1and2} />
        <Image alt="img" src={outdoorCase1and3} />
        <Image alt="img" src={outdoorCase1and4} />
      </>
    ),
    zhNode: (
      <>
        <p>
          位于汕尾繁华商业区的这个户外LED项目，需要一块能经受沿海城市潮湿气候和强烈阳光考验、同时呈现震撼广告内容的显示屏。我们在一家大型购物中心外墙安装了一块8m×4m的雷科诺P5户外LED屏。IP65防护等级的面板提供全面的防雨、防尘和防盐雾保护，确保全年可靠运行。峰值亮度达7000尼特，即使在热带阳光直射下也能保持鲜艳夺目的显示效果。屏幕通过雷科诺云端内容管理系统进行管理，物业方可远程排期和更新广告内容。这次安装将建筑外立面打造成了高价值的广告平台，吸引了众多优质租户。
        </p>
        <Image alt="img" src={outdoorCase1and1} />
        <Image alt="img" src={outdoorCase1and2} />
        <Image alt="img" src={outdoorCase1and3} />
        <Image alt="img" src={outdoorCase1and4} />
      </>
    ),
    twNode: (
      <>
        <p>
          位於汕尾繁華商業區的這個戶外LED項目，需要一塊能經受沿海城市潮濕氣候和強烈陽光考驗、同時呈現震撼廣告內容的顯示屏。我們在一家大型購物中心外牆安裝了一塊8m×4m的雷科諾P5戶外LED屏。IP65防護等級的面板提供全面的防雨、防塵和防鹽霧保護，確保全年可靠運行。峰值亮度達7000尼特，即使在熱帶陽光直射下也能保持鮮豔奪目的顯示效果。螢幕透過雷科諾雲端內容管理系統進行管理，物業方可遠端排期和更新廣告內容。這次安裝將建築外立面打造成了高價值的廣告平台，吸引了眾多優質租戶。
        </p>
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
        <p>
          A major sports venue in Foshan required a professional-grade LED display solution for a series of basketball tournaments and corporate events. We deployed Leekono P4.81 rental LED panels to create a 12m × 5m main screen and two 6m × 3m side screens flanking the court. The entire setup was completed within 6 hours thanks to the tool-free magnetic front-service design. The displays delivered exceptional performance with a 3840Hz refresh rate, ensuring smooth slow-motion replays and real-time score updates. The lightweight cabinet design—just 7.5kg per panel—allowed for easy rigging from the stadium's ceiling structure. After the tournament concluded, the entire system was dismantled and packed within 3 hours, demonstrating the outstanding efficiency and portability of rental LED solutions.
        </p>
        <Image alt="img" src={rentalCase2and1} />
        <Image alt="img" src={rentalCase2and2} />
      </>
    ),
    zhNode: (
      <>
        <p>
          佛山一座大型体育场馆需要专业级LED显示方案，用于一系列篮球赛事和企业活动。我们部署了雷科诺P4.81租赁LED面板，搭建了一块12m×5m的主屏和两块6m×3m的侧屏，分列球场两侧。得益于免工具磁吸前维护设计，整套系统仅用6小时即搭建完成。显示屏以3840Hz高刷新率呈现出色表现，确保慢动作回放流畅、实时比分更新清晰。轻量化箱体设计——每块面板仅7.5公斤——便于从体育场天花板结构吊装。赛事结束后，整套系统在3小时内即完成拆卸和打包，充分展现了租赁LED解决方案出色的效率和便携性。
        </p>
        <Image alt="img" src={rentalCase2and1} />
        <Image alt="img" src={rentalCase2and2} />
      </>
    ),
    twNode: (
      <>
        <p>
          佛山一座大型體育場館需要專業級LED顯示方案，用於一系列籃球賽事和企業活動。我們部署了雷科諾P4.81租賃LED面板，搭建了一塊12m×5m的主屏和兩塊6m×3m的側屏，分列球場兩側。得益於免工具磁吸前維護設計，整套系統僅用6小時即搭建完成。顯示屏以3840Hz高刷新率呈現出色表現，確保慢動作回放流暢、即時比分更新清晰。輕量化箱體設計——每塊面板僅7.5公斤——便於從體育場天花板結構吊裝。賽事結束後，整套系統在3小時內即完成拆卸和打包，充分展現了租賃LED解決方案出色的效率和便攜性。
        </p>
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
