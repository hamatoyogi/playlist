class CarelessWhisper {
  public artist: string = "George Michael";
  public link: string   = "https://www.youtube.com/watch?v=izGwDsrQ1eQ";
}

class CarelessCoder extends CarelessWhisper {

  public partA: string = `
        I feel so unsure
        As I take your code
        And push it to the repo
        As the build dies
        Something in your eyes
        Calls to mind a silver screen
        And all its sad goodbyes
       `;

  public chorus: string = `
        I'm never gonna test again
        Guilty fingers have got no rhythm
        Though it's easy to pretend
        I know you're not a fool
        I should've known better than to cheat a friend
        And waste a chance that I've been given
        So I'm never gonna test again
        The way I test with you
        `;
}


new CarelessCoder();



