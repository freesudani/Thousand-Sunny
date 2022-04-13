export const Colors = {
  Brand: {
    OrangeMain: "#FB8F1D",
    OrangeDark: "#dc7304",
    YellowStars: "#FFBB0C",
    BorderGrey: "#C4C4C4",
    BGWhite: "#FFFFFF",
    BGGrey: "#E5E5E5",
  },
  Text: {
    TextBlack: "#000000",
    TextDark: "#202336",
    TextDark2: "#4A4C53",
    TextGrey: "#B8BECD",
    TextGrey2: "#7D7987",
    TextGrey3: "#848484",
    TextGrey4: "#fafafa",
  },
  Default: {
    White: "#FFFFFF",
    Black: "#000000",
  },
};

export const Shadows = {
  Grey: "0px 30px 40px rgba(212, 217, 232, 0.2)",
  Dark: "0px 10px 20px rgba(41, 41, 42, 0.07)",
  Dark2: "-2px 4px 45px rgba(0, 0, 0, 0.13)",
};

export const TextStyles = {
  Heading: {
    H1: {
      fontFamily: "Playfair Display",
      FontSize: "64px",
      LineHeight: "80px",
      LetterSpacing: "0",
      FontWeight: 700,
    },
    H2: {
      fontFamily: "Playfair Display",
      FontSize: "36px",
      LineHeight: "50px",
      LetterSpacing: "0",
      FontWeight: 700,
    },
  },
  Subtitle: {
    Subtitle1: {
      fontFamily: "Inter",
      FontSize: "22px",
      LineHeight: "27px",
      LetterSpacing: "0",
      FontWeight: 600,
    },
    Subtitle2: {
      fontFamily: "Inter",
      FontSize: "22px",
      LineHeight: "48px",
      LetterSpacing: "0",
      FontWeight: 700,
    },
    Subtitle3: {
      fontFamily: "Inter",
      FontSize: "19px",
      LineHeight: "30px",
      LetterSpacing: "0",
      FontWeight: 700,
    },
    Subtitle4: {
      fontFamily: "Mulish",
      FontSize: "19px",
      LineHeight: "60px",
      LetterSpacing: "0",
      FontWeight: 700,
    },
  },
  Body: {
    Body1: {
      fontFamily: "Mulish",
      FontSize: "17px",
      LineHeight: "30px",
      LetterSpacing: "0",
      FontWeight: 300,
    },
    Body2: {
      fontFamily: "Mulish",
      FontSize: "24px",
      LineHeight: "36px",
      LetterSpacing: "0",
      FontWeight: 400,
    },
    Body3: {
      fontFamily: "Inter",
      FontSize: "18px",
      LineHeight: "48px",
      LetterSpacing: "0",
      FontWeight: 400,
    },
    Body4: {
      fontFamily: "Inter",
      FontSize: "15px",
      LineHeight: "26px",
      LetterSpacing: "0",
      FontWeight: 400,
    },
    Body5: {
      fontFamily: "Mulish",
      FontSize: "18px",
      LineHeight: "28px",
      LetterSpacing: "0",
      FontWeight: 300,
    },
  },
  Lead: {
    Lead1: {
      fontFamily: "Inter",
      FontSize: "16px",
      LineHeight: "19px",
      LetterSpacing: "0",
      FontWeight: 500,
    },
    Lead2: {
      fontFamily: "Inter",
      FontSize: "16px",
      LineHeight: "19px",
      LetterSpacing: "0",
      FontWeight: 400,
    },
    Lead3: {
      fontFamily: "Inter",
      FontSize: "15px",
      LineHeight: "40px",
      LetterSpacing: "0",
      FontWeight: 500,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    Lead4: {
      fontFamily: "Inter",
      FontSize: "17px",
      LineHeight: "60px",
      LetterSpacing: "0",
      FontWeight: 600,
    },
    Lead5: {
      fontFamily: "Inter",
      FontSize: "15px",
      LineHeight: "28px",
      LetterSpacing: "0",
      FontWeight: 600,
    },
    Lead6: {
      fontFamily: "Mulish",
      FontSize: "18px",
      LineHeight: "38px",
      LetterSpacing: "0",
      FontWeight: 300,
    },
    Lead7: {
      fontFamily: "Mulish",
      FontSize: "17px",
      LineHeight: "44px",
      LetterSpacing: "0",
      FontWeight: 700,
    },
  },
  Bundler: function (attr) {
    return `
      font-family: ${attr.fontFamily};
      font-size: ${attr.FontSize};
      font-weight:  ${attr.FontWeight};
      line-height: ${attr.LineHeight};
      letter-spacing: ${attr.LetterSpacing};
      `;
  },
};
