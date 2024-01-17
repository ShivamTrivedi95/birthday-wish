// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
  // The length of the sentence can be arbitrary. You can write ten sentences or twenty sentences.
  // Try not to exceed 15 words per sentence, otherwise the display effect may not be very good
  texts: [
    "Hey,", //Here, the last comma at the end of each sentence must be in English!! Very important!!
    "Lovely little cutie",
    "Today is your birthday",
    "This is what we have together",
    "It’s the twenty fourth birthday",
    "last year's birthday",
    "Still remember eating at Lagoon?",
    "I want to eat well this year.",
    "But we are here...",
    "So what? We are together...!!",
    "CHUCHU~~",
  ],
  /**
   * imgs can be left blank, but if it is filled in, it must follow the following format
   * "Corresponding to the text above, it must be exactly the same": "Picture address, you can put the picture in the imgs folder"
   * For example
   * ""Lovely little cutie"": "./imgs/xiaokeai.jpg"
   *
   * If you don’t want pictures, just write two slash comments at the beginning of each line. For example, the picture of "Today is your birthday" below will not be displayed:)
   * Tip: It is best to use a square or close to a square for the picture, which will look better
   */

  imgs: {
    "Lovely little cutie": "./imgs/bachu.jpg",
  },
  //Button text description, the following is the default button text, in English, you can change it to the text you like
  desc: {
    turn_on: "Raise the curtain",
    play: "Switch on lights",
    bannar_coming: "What is this?",
    balloons_flying: "It seems like something is missing",
    cake_fadein: "Cake?",
    light_candle: "Candles？",
    wish_message: "Happy Birthday !!",
    story: "A MESSAGE FOR YOU",
  },
};
