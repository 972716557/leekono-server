import { ReactNode } from "react";
import poster1 from "@/assets/home/poster1.png";
import poster2 from "@/assets/home/poster2.png";
import { StaticImageData } from "next/image";

export type NewsCategory = "company" | "industry" | "technical";

export interface NewsItem {
  id: string;
  category: NewsCategory;
  poster: StaticImageData;
  enTitle: string;
  zhTitle: string;
  twTitle: string;
  enSummary: string;
  zhSummary: string;
  twSummary: string;
  enContent: ReactNode;
  zhContent: ReactNode;
  twContent: ReactNode;
  time: string;
}

export const NewsList: NewsItem[] = [
  {
    id: "guangzhou-exhibition-2025",
    category: "company",
    poster: poster1,
    enTitle: "Leekono LED at Guangzhou International LED Exhibition 2025",
    zhTitle: "雷科诺亮相2025广州国际LED展览会",
    twTitle: "雷科諾亮相2025廣州國際LED展覽會",
    enSummary:
      "Leekono LED showcased our latest products including transparent LED, crystal LED, and soft LED displays at the 2025 Guangzhou International LED Exhibition.",
    zhSummary:
      "雷科诺LED携最新透明屏、晶膜屏、柔软屏等产品亮相2025广州国际LED展览会，吸引众多海内外客户关注。",
    twSummary:
      "雷科諾LED攜最新透明屏、晶膜屏、柔軟屏等產品亮相2025廣州國際LED展覽會，吸引眾多海內外客戶關注。",
    enContent: (
      <div>
        <p>
          In February 2025, Leekono LED participated in the Guangzhou
          International LED Exhibition, one of the largest LED industry events in
          Asia. Our booth attracted significant attention from clients and
          partners from over 30 countries.
        </p>
        <p>
          We showcased our latest product lineup including the ultra-thin Crystal
          LED series, high-transparency Transparent LED panels, and the
          innovative Soft LED displays that can be bent into curved shapes. Our
          team provided live demonstrations and technical consultations to
          visitors.
        </p>
        <p>
          The exhibition was a great success, resulting in partnerships with
          distributors from Southeast Asia, the Middle East, and South America.
          We look forward to continuing to expand our global presence.
        </p>
      </div>
    ),
    zhContent: (
      <div>
        <p>
          2025年2月，雷科诺LED参加了广州国际LED展览会，这是亚洲最大的LED行业盛会之一。我们的展位吸引了来自30多个国家的客户和合作伙伴的广泛关注。
        </p>
        <p>
          我们展示了最新的产品阵容，包括超薄晶膜屏系列、高透明度透明屏面板，以及可弯曲成曲面形状的创新柔软屏。我们的团队为参观者提供了现场演示和技术咨询。
        </p>
        <p>
          此次展会取得圆满成功，与来自东南亚、中东和南美的经销商建立了合作关系。我们期待继续拓展全球业务版图。
        </p>
      </div>
    ),
    twContent: (
      <div>
        <p>
          2025年2月，雷科諾LED參加咗廣州國際LED展覽會，呢個係亞洲最大嘅LED行業盛會之一。我哋嘅展位吸引咗嚟自30多個國家嘅客戶同合作夥伴嘅廣泛關注。
        </p>
        <p>
          我哋展示咗最新嘅產品陣容，包括超薄晶膜屏系列、高透明度透明屏面板，同埋可以屈成曲面嘅創新柔軟屏。我哋嘅團隊為參觀者提供咗現場演示同技術諮詢。
        </p>
        <p>
          今次展會取得圓滿成功，同嚟自東南亞、中東同南美嘅經銷商建立咗合作關係。我哋期待繼續拓展全球業務版圖。
        </p>
      </div>
    ),
    time: "2025-02-15",
  },
  {
    id: "led-display-trends-2025",
    category: "industry",
    poster: poster2,
    enTitle: "LED Display Industry Trends to Watch in 2025",
    zhTitle: "2025年LED显示屏行业趋势展望",
    twTitle: "2025年LED顯示屏行業趨勢展望",
    enSummary:
      "From Mini LED and Micro LED to transparent displays and AI integration, explore the key trends shaping the LED display industry.",
    zhSummary:
      "从Mini LED和Micro LED到透明显示和AI集成，探索塑造LED显示屏行业的关键趋势。",
    twSummary:
      "從Mini LED同Micro LED到透明顯示同AI集成，探索塑造LED顯示屏行業嘅關鍵趨勢。",
    enContent: (
      <div>
        <p>
          The LED display industry continues to evolve rapidly in 2025. Here are
          the key trends driving innovation and growth in the sector:
        </p>
        <p>
          <strong>1. Mini LED & Micro LED Adoption</strong> — Mini LED
          technology is becoming mainstream for commercial displays, offering
          higher contrast ratios and HDR performance. Micro LED, while still
          premium-priced, is gaining traction in high-end applications.
        </p>
        <p>
          <strong>2. Transparent & Glass LED Displays</strong> — Transparent LED
          screens are transforming retail storefronts and architectural
          installations. New advances in crystal LED technology allow for greater
          transparency while maintaining vivid image quality.
        </p>
        <p>
          <strong>3. AI-Powered Content Management</strong> — Artificial
          intelligence is being integrated into LED display systems for automated
          content scheduling, audience analytics, and dynamic content
          optimization.
        </p>
        <p>
          <strong>4. Energy Efficiency</strong> — With growing environmental
          consciousness, LED manufacturers are focusing on reducing power
          consumption through improved driver ICs and common cathode technology.
        </p>
      </div>
    ),
    zhContent: (
      <div>
        <p>
          2025年，LED显示屏行业持续快速发展。以下是推动行业创新和增长的关键趋势：
        </p>
        <p>
          <strong>1. Mini LED 和 Micro LED 普及</strong> —— Mini
          LED技术正成为商用显示的主流，提供更高的对比度和HDR性能。Micro
          LED虽然价格仍属高端，但在高端应用中越来越受欢迎。
        </p>
        <p>
          <strong>2. 透明屏和玻璃LED显示屏</strong> ——
          透明LED屏幕正在改变零售店面和建筑装饰。晶膜屏技术的新进展使得在保持鲜艳画质的同时实现更高的透光率。
        </p>
        <p>
          <strong>3. AI驱动的内容管理</strong> ——
          人工智能正被集成到LED显示系统中，用于自动内容排程、受众分析和动态内容优化。
        </p>
        <p>
          <strong>4. 节能环保</strong> ——
          随着环保意识的增强，LED制造商正通过改进驱动IC和共阴极技术来降低功耗。
        </p>
      </div>
    ),
    twContent: (
      <div>
        <p>
          2025年，LED顯示屏行業持續快速發展。以下係推動行業創新同增長嘅關鍵趨勢：
        </p>
        <p>
          <strong>1. Mini LED 同 Micro LED 普及</strong> —— Mini
          LED技術正成為商用顯示嘅主流，提供更高嘅對比度同HDR性能。Micro
          LED雖然價格仍屬高端，但喺高端應用中越嚟越受歡迎。
        </p>
        <p>
          <strong>2. 透明屏同玻璃LED顯示屏</strong> ——
          透明LED屏幕正喺改變零售店面同建築裝飾。晶膜屏技術嘅新進展令到喺保持鮮豔畫質嘅同時實現更高嘅透光率。
        </p>
        <p>
          <strong>3. AI驅動嘅內容管理</strong> ——
          人工智能正被集成到LED顯示系統中，用於自動內容排程、受眾分析同動態內容優化。
        </p>
        <p>
          <strong>4. 節能環保</strong> ——
          隨住環保意識嘅增強，LED製造商正通過改進驅動IC同共陰極技術嚟降低功耗。
        </p>
      </div>
    ),
    time: "2025-01-20",
  },
  {
    id: "how-to-choose-led-display",
    category: "technical",
    poster: poster1,
    enTitle: "How to Choose the Right LED Display for Your Project",
    zhTitle: "如何为您的项目选择合适的LED显示屏",
    twTitle: "如何為您的項目選擇合適的LED顯示屏",
    enSummary:
      "A comprehensive guide covering pixel pitch, brightness, IP rating, and other key factors to help you select the perfect LED display.",
    zhSummary:
      "全面指南涵盖像素间距、亮度、IP防护等级等关键因素，帮助您选择最合适的LED显示屏。",
    twSummary:
      "全面指南涵蓋像素間距、亮度、IP防護等級等關鍵因素，幫助您選擇最合適的LED顯示屏。",
    enContent: (
      <div>
        <p>
          Choosing the right LED display requires understanding several key
          technical specifications and matching them to your specific use case.
          Here is our expert guide:
        </p>
        <p>
          <strong>Pixel Pitch</strong> — This is the distance between LED
          pixels. Smaller pixel pitch (e.g., P1.25-P2.5) is ideal for indoor
          close-viewing applications like conference rooms. Larger pixel pitch
          (P3-P10) works well for outdoor billboards viewed from a distance.
        </p>
        <p>
          <strong>Brightness</strong> — Indoor displays typically need
          800-1500 nits, while outdoor displays require 5000-7000+ nits to
          remain visible in direct sunlight.
        </p>
        <p>
          <strong>IP Rating</strong> — For outdoor installations, look for at
          least IP65 (dust-tight and water-jet resistant). Indoor displays
          typically use IP30-IP54.
        </p>
        <p>
          <strong>Installation Type</strong> — Consider whether you need a
          fixed installation, rental/portable setup, or creative format (curved,
          transparent, floor-mounted). Each has different cabinet designs and
          maintenance requirements.
        </p>
        <p>
          Contact our team for personalized recommendations based on your
          project requirements.
        </p>
      </div>
    ),
    zhContent: (
      <div>
        <p>
          选择合适的LED显示屏需要了解几项关键技术规格，并将其与您的具体应用场景相匹配。以下是我们的专业指南：
        </p>
        <p>
          <strong>像素间距</strong> ——
          即LED像素之间的距离。较小的像素间距（如P1.25-P2.5）适合会议室等近距离观看的室内场景。较大的像素间距（P3-P10）适合远距离观看的户外广告牌。
        </p>
        <p>
          <strong>亮度</strong> ——
          室内显示屏通常需要800-1500尼特，而户外显示屏需要5000-7000+尼特才能在阳光直射下保持清晰可见。
        </p>
        <p>
          <strong>IP防护等级</strong> ——
          户外安装至少需要IP65（完全防尘和防水喷射）。室内显示屏通常使用IP30-IP54。
        </p>
        <p>
          <strong>安装方式</strong> ——
          考虑您需要的是固定安装、租赁/便携式设备，还是创意形式（曲面、透明、地砖）。每种方式对箱体设计和维护要求各不相同。
        </p>
        <p>联系我们的团队，获取基于您项目需求的个性化推荐。</p>
      </div>
    ),
    twContent: (
      <div>
        <p>
          選擇合適嘅LED顯示屏需要了解幾項關鍵技術規格，並將其同您嘅具體應用場景相匹配。以下係我哋嘅專業指南：
        </p>
        <p>
          <strong>像素間距</strong> ——
          即LED像素之間嘅距離。較細嘅像素間距（如P1.25-P2.5）適合會議室等近距離觀看嘅室內場景。較大嘅像素間距（P3-P10）適合遠距離觀看嘅戶外廣告牌。
        </p>
        <p>
          <strong>亮度</strong> ——
          室內顯示屏通常需要800-1500尼特，而戶外顯示屏需要5000-7000+尼特先可以喺陽光直射下保持清晰可見。
        </p>
        <p>
          <strong>IP防護等級</strong> ——
          戶外安裝至少需要IP65（完全防塵同防水噴射）。室內顯示屏通常使用IP30-IP54。
        </p>
        <p>
          <strong>安裝方式</strong> ——
          考慮您需要嘅係固定安裝、租賃/便攜式設備，定係創意形式（曲面、透明、地磚）。每種方式對箱體設計同維護要求各唔相同。
        </p>
        <p>聯繫我哋嘅團隊，獲取基於您項目需求嘅個性化推薦。</p>
      </div>
    ),
    time: "2025-01-05",
  },
  {
    id: "leekono-2024-annual-review",
    category: "company",
    poster: poster2,
    enTitle: "Leekono LED 2024 Annual Review: A Year of Growth",
    zhTitle: "雷科诺LED 2024年度回顾：成长之年",
    twTitle: "雷科諾LED 2024年度回顧：成長之年",
    enSummary:
      "Looking back at our achievements in 2024 — expanded global reach, new product launches, and strengthened partnerships.",
    zhSummary:
      "回顾2024年的成就 — 全球版图扩大、新品发布、合作伙伴关系加强。",
    twSummary:
      "回顧2024年嘅成就 — 全球版圖擴大、新品發佈、合作夥伴關係加強。",
    enContent: (
      <div>
        <p>
          2024 was a remarkable year for Leekono LED. We achieved significant
          milestones across all aspects of our business:
        </p>
        <p>
          <strong>Global Expansion</strong> — We expanded our market presence to
          over 100 countries, with new distribution partnerships established in
          Latin America and Africa.
        </p>
        <p>
          <strong>Product Innovation</strong> — Our R&D team launched the
          next-generation Crystal LED series with 30% higher transparency and the
          new Interactive Floor LED with real-time motion sensing capabilities.
        </p>
        <p>
          <strong>Quality Commitment</strong> — We achieved ISO 9001:2015
          recertification and implemented enhanced quality control processes
          across our 2,000㎡ production facility.
        </p>
        <p>
          We thank all our partners and customers for their continued trust and
          support. Here is to an even more successful 2025!
        </p>
      </div>
    ),
    zhContent: (
      <div>
        <p>
          2024年对雷科诺LED来说是非凡的一年。我们在业务各方面取得了显著的里程碑：
        </p>
        <p>
          <strong>全球扩张</strong> ——
          我们将市场覆盖扩大至100多个国家，在拉丁美洲和非洲建立了新的分销合作关系。
        </p>
        <p>
          <strong>产品创新</strong> ——
          研发团队推出了新一代晶膜屏系列，透明度提升30%，以及具有实时动作感应功能的新型互动地砖屏。
        </p>
        <p>
          <strong>品质承诺</strong> ——
          我们通过了ISO 9001:2015再认证，并在2000㎡的生产基地实施了强化品控流程。
        </p>
        <p>
          感谢所有合作伙伴和客户的持续信任与支持。期待2025年取得更大成功！
        </p>
      </div>
    ),
    twContent: (
      <div>
        <p>
          2024年對雷科諾LED嚟講係非凡嘅一年。我哋喺業務各方面取得咗顯著嘅里程碑：
        </p>
        <p>
          <strong>全球擴張</strong> ——
          我哋將市場覆蓋擴大至100多個國家，喺拉丁美洲同非洲建立咗新嘅分銷合作關係。
        </p>
        <p>
          <strong>產品創新</strong> ——
          研發團隊推出咗新一代晶膜屏系列，透明度提升30%，同埋具有實時動作感應功能嘅新型互動地磚屏。
        </p>
        <p>
          <strong>品質承諾</strong> ——
          我哋通過咗ISO 9001:2015再認證，並喺2000㎡嘅生產基地實施咗強化品控流程。
        </p>
        <p>
          感謝所有合作夥伴同客戶嘅持續信任同支持。期待2025年取得更大成功！
        </p>
      </div>
    ),
    time: "2024-12-28",
  },
];
