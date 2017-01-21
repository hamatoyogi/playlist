abstract class Unintended {

  public artist: string = "Muse";
  public link  : string = "https://www.youtube.com/watch?v=i9LOFXwPwC4";

}

class Unindented extends Unintended {

  public partA: string = `
    You could be my unindented
    choice to use no tabs or spaces
    you could be the file I'll always love

    You could be un-nested even
    in my deepest iterations
    You could be forever left-aligned
  `;

  public chorus:string = `
    I'll indent as soon as I can
    but I'm busy mending broken
    pieces of the code I wrote before
  `;

}

new Unindented();
