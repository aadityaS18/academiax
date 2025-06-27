
export interface TestPrepResource {
  books: Array<{
    title: string;
    link: string;
  }>;
  youtubeChannels: Array<{
    name: string;
    url: string;
  }>;
}

export const testPrepResources: Record<string, TestPrepResource> = {
  IELTS: {
    books: [
      { title: "Cambridge IELTS 17 Academic Student's Book", link: "https://www.amazon.com/dp/1316635767" },
      { title: "The Official Cambridge Guide to IELTS", link: "https://www.amazon.com/dp/1107620694" },
      { title: "Barron's IELTS Superpack", link: "https://www.amazon.com/dp/1438075219" }
    ],
    youtubeChannels: [
      { name: "IELTS Liz", url: "https://youtube.com/@IELTSLiz" },
      { name: "E2 IELTS", url: "https://youtube.com/@E2IELTS" },
      { name: "IELTS Simon", url: "https://youtube.com/@ieltssimon" }
    ]
  },
  SAT: {
    books: [
      { title: "The Official SAT Study Guide 2024", link: "https://www.amazon.com/dp/1457315645" },
      { title: "Kaplan SAT Prep Plus 2024", link: "https://www.amazon.com/dp/1506285244" },
      { title: "Barron's SAT 29th Edition", link: "https://www.amazon.com/dp/1506264328" }
    ],
    youtubeChannels: [
      { name: "Khan Academy SAT", url: "https://youtube.com/@khanacademy" },
      { name: "SupertutorTV", url: "https://youtube.com/@SupertutorTV" },
      { name: "SAT Math", url: "https://youtube.com/@SATMath" }
    ]
  },
  TOEFL: {
    books: [
      { title: "The Official Guide to the TOEFL iBT Test", link: "https://www.amazon.com/dp/1260011216" },
      { title: "Barron's TOEFL iBT Superpack", link: "https://www.amazon.com/dp/1438075170" },
      { title: "Cambridge Preparation for the TOEFL Test", link: "https://www.amazon.com/dp/0521755875" }
    ],
    youtubeChannels: [
      { name: "TOEFL TV Official", url: "https://youtube.com/@TOEFLTV" },
      { name: "TST Prep TOEFL", url: "https://youtube.com/@TSTPrep" },
      { name: "BestMyTest TOEFL", url: "https://youtube.com/@BestMyTest" }
    ]
  },
  GRE: {
    books: [
      { title: "The Official Guide to the GRE General Test", link: "https://www.amazon.com/dp/1259862410" },
      { title: "Manhattan Prep GRE Set of 8 Strategy Guides", link: "https://www.amazon.com/dp/1506232396" },
      { title: "Barron's GRE 23rd Edition", link: "https://www.amazon.com/dp/1506264328" }
    ],
    youtubeChannels: [
      { name: "GregMat", url: "https://youtube.com/@GregMat" },
      { name: "Magoosh GRE", url: "https://youtube.com/@MagooshGRE" },
      { name: "Manhattan Prep GRE", url: "https://youtube.com/@ManhattanPrepGRE" }
    ]
  }
};
