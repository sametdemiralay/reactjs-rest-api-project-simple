## Explanation

I used [json-sever](https://github.com/typicode/json-server) in this project therefore before running this project you have to run it on your localhost. db.json in the localhost you created, it should be like the below.

```json
{
  "books": [
    {
      "author": "Stephen Hawking",
      "title": "A Brief History Of Time",
      "summary": "Was there a beginning of time? Could time run backwards? Is the universe infinite or does it have boundaries? These are just some of the questions considered in the internationally acclaimed masterpiece by the world renowned physicist - generally considered to have been one of the world's greatest thinkers. It begins by reviewing the great theories of the cosmos from Newton to Einstein, before delving into the secrets which still lie at the heart of space and time, from the Big Bang to black holes, via spiral galaxies and strong theory. To this day A Brief History of Time remains a staple of the scientific canon, and its succinct and clear language continues to introduce millions to the universe and its wonders.",
      "type": "Science",
      "id": 1
    },
    {
      "author": "George Orwell",
      "title": "Animal Farm",
      "summary": "Animal Farm is an allegorical novella by George Orwell, first published in England on 17 August 1945. The book tells the story of a group of farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy. Ultimately, however, the rebellion is betrayed, and the farm ends up in a state as bad as it was before, under the dictatorship of a pig named Napoleon. According to Orwell, the fable reflects events leading up to the Russian Revolution of 1917 and then on into the Stalinist era of the Soviet Union. Orwell, a democratic socialist, was a critic of Joseph Stalin and hostile to Moscow-directed Stalinism, an attitude that was critically shaped by his experiences during the Spanish Civil War.",
      "type": "Literature",
      "id": 2
    },
    {
      "author": "Stefano D'Anna",
      "title": "The School for Gods",
      "summary": "This Book is a map and an escape plan. When existence grips you in a vice so you cannot breathe, as it has done with me, when you are hopelessly disappointed by your life and do not see any way out, this Book will find you, will appear in your hands and you will know that you are ready for your Individual Revolution, for the greatest adventure a man can possibly imagine: The regaining of his integrity, of his paradise lost. This Book is the story of my attempt to get out of the rut of a predetermined, collective destiny and be an individual. On this journey back to the Essence, I have had to undertake the impossible endevour to shuffle off the mortal ballast of the darkest parts of my Being: Destructive thoughts, negative emotions, second-hand convictions and ideas.",
      "type": "Philosophy",
      "id": 3
    },
    {
      "author": "Michel De Montaigne",
      "title": "The Complete Essays",
      "summary": "Michel de Montaigne was one of the most influential figures of the Renaissance, singlehandedly responsible for popularising the essay as a literary form. This Penguin Classics edition of The Complete Essays is translated from the French and edited with an introduction and notes by M.A. Screech. In 1572 Montaigne retired to his estates in order to devote himself to leisure, reading and reflection. There he wrote his constantly expanding assays, inspired by the ideas he found in books contained in his library and from his own experience.",
      "type": "Philosophy",
      "id": 4
    },
    {
      "author": "Eiichiro Oda",
      "title": "One Piece",
      "summary": "As a child, Monkey D. Luffy dreamed of becoming King of the Pirates. But his life changed when he accidentally ate the Gum-Gum Fruit, an enchanted Devil Fruit that gave him the ability to stretch like rubber. Its only drawback? He'll never be able to swim again--a serious handicap for an aspiring sea dog! Years later, Luffy sets off on his quest to find the One Piece, said to be the greatest treasure in the world... This box set includes volumes 1-23, which comprise the first two story arcs, East Blue and Baroque Works. With exclusive premiums and great savings over buying the individual volumes, this set is a pirate’s treasure for any manga fan!",
      "type": "Comic Book",
      "id": 5
    },
    {
      "author": "Tomohiro Suzuki",
      "title": "One Punch Man",
      "summary": "In a world of superhuman beings, Saitama is a unique hero, he can defeat enemies with a single punch. But being just one hero in a world filled with them, his life is empty and hollow: he gets no respect from anyone, he displays a laidback attitude to everything and for the most part, he finds his overall hero life pointless... and worst of all, he lost his hair due to intense training. These are the adventures of an ordinary yet extraordinary hero.",
      "type": "Comic Book",
      "id": 6
    },
    {
      "author": "Carl Sagan",
      "title": "Cosmos",
      "summary": "Science is the key to understanding. It’s always changing and evolving, but it never stops discovering new things. There are certain truths that we know about science, but there are also infinite possibilities for what we don’t know yet.  We can only learn more about the universe by asking questions and finding answers. We’re lucky to be a part of such an amazing process, because we live in a very small part of the universe.",
      "type": "Science",
      "id": 7
    }
  ]
}
```

You also need to run it on port 3400 your localhost
```
json-server --watch db.json --port 3400
```

