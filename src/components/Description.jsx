export default function Description() {
  const quotes = [
    `She's a person; the doctor pronounces her dead, not the news.  
    -- Aaron Sorkin`,
    `The idea of 24-hour news, if you really step back, is pretty insane. Just even saying '24-hour news' almost has satire laced in it.  
    -- Adam McKay`,
    `The good news is that we are Buddha. The bad news is that all beings are Buddha. The sickness of being human is the sickness of wanting to be unique.  
    -- Albert Low`,
    `It is hard news that catches readers. Features hold them.  
    -- Alfred Harmsworth`,
    `The good news about computers is that they do what you tell them to do. The bad news is that they do what you tell them to do.  
    -- Ted Nelson`,
    `Bad news travels at the speed of light; good news travels like molasses.  
    -- Tracy Morgan`,
  ];
const lengthOfQuotes = quotes.length;
  const randomNum = Math.floor(lengthOfQuotes * Math.random());

  return (
    <div>
      <q>{quotes[randomNum]}</q>
    </div>
  );
}
