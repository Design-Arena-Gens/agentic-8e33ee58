const storyLines = [
  "سورج ابھی نکلا ہی تھا، مرغے بانگ دے رہے تھے۔",
  "چاچا اللہ دِتّا اپنے گھر سے نکلے، سر پر ٹوپی، ہاتھ میں کُلہاڑا،" +
    " اور کندھے پر بیلچہ۔",
  "ان کے چہرے پر مسکراہٹ تھی، جیسے دن کی محنت کا شوق ہو۔"
];

export default function Page() {
  return (
    <main>
      <section className="story-card relative text-dawn-900">
        <header className="mb-6 text-right">
          <p className="font-display text-3xl heading">صبح کی بانگ</p>
          <p className="text-sm text-dawn-600">دیہی کہانی کا منظر</p>
        </header>
        <article className="story-text font-display">
          {storyLines.map((line, index) => (
            <p key={index} className="mb-5 last:mb-0">
              {line}
            </p>
          ))}
        </article>
        <footer className="signature text-dawn-600">— یادوں کی خوشبو</footer>
      </section>
    </main>
  );
}
