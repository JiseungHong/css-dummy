const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const imageText = document.getElementById("imageText");
const image = document.getElementById("image");
const imageLink = document.getElementById("imageLink");

let currentIndex = 7;

const imageNames = ["NLP Analysis and Recommendation System for Yelp",
                    "The PageRank Citation Ranking : Bringing Order to Web ",
                    "Attention Is All You Need",
                    "KR-BERT: A Small-Scale Korean-Specific Language Model",
                    "RoBERTa: A Robustly Optimized BERT Pretraining Approach",
                    "LUKE: Deep Contextualized Entity Representation with Entity-aware Self-attention",
                    "KALA: Knowledge-Augmented Language Model Adaptation",
                    "DetectGPT: Zero-Shot Machine-Generated Text Detection using Probability Curvature",
                    "Generative Adversarial Nets",
                    "The Forward-Forward Algorithm: Some Preliminary Investigations",
                    "Taming Transformers for High-Resolution Image Synthesis",
                    "DagoBERT: Generating Derivational Morphology with a Pretrained Language Model",
                    "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
                    "SpanBERT: Improving Pre-training by Representing and Predicting Spans",
                    "Sentence Encoders on STILTs: Supplementary Training on Intermediate Labeled-data Tasks"];

function showImage(index) {
  image.src = `images/image${index + 1}.png`;
  imageText.textContent = imageNames[index];
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imageNames.length) % imageNames.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imageNames.length;
  showImage(currentIndex);
});

imageLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = `https://jiseung-hong.tistory.com/${currentIndex+3}`;
  });

showImage(currentIndex);
