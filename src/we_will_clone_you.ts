abstract class WeWillRockYou {

    public artist: string = "Queen";

}

class WeWillCloneYou extends WeWillRockYou {

    public partA: string = `
        Buddy you're a boy make a big noise
        Playin' in the street gonna be a big dev some day

        You got zero tests,
        a big disgrace,
        Memory leaks all over the place
        Singin
  `;

    public chorus: string = `
        We will we will clone you
        We will we will clone you
  `;

    public partB: string = `
        Buddy you're a young man hard man
        Shoutin' in the street gonna have a lot of stars some day

        Your code is a mess,
        a big disgrace,
        using magic numbers all over the place
     `;

    public partC: string = `
        Buddy you're an old man poor man 
        Pleadin' with your eyes gonna' make you release some day 

        You got typos in your class
        You big disgrace 
        Somebody better open a pull request
    `;

}

new WeWillConeYou();
