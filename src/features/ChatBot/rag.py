from google import genai
import numpy as np

client = genai.Client(api_key="AIzaSyCnMVlz5rBkHqh2HlBgTf2YSyt1iGtGAT0")
MODEL = "gemini-3-flash-preview"

# ---------------------------
# Documents sous forme de dictionnaire
# clé = ID ou titre, valeur = texte
# ---------------------------
documents = {
    "fever": "Fever is a body temperature above 38°C and may indicate an infection.",
    "flu": "Common flu symptoms include fever, cough, sore throat, fatigue and body aches.",
    "cold": "A cold may cause sneezing, runny nose and mild cough.",
    "migraine": "Headaches combined with sensitivity to light may indicate a migraine.",
    "dehydration": "Dehydration symptoms include dizziness, dry mouth and fatigue.",
    "persistent_fever": "If a fever lasts more than 3 days, a doctor should be consulted.",
    "chest_pain": "Severe chest pain or breathing difficulty requires immediate medical attention.",
    "mild_flu_recovery": "Rest and hydration help recovery from mild flu symptoms.",
    "vomiting_abdomen": "Persistent vomiting or severe abdominal pain requires medical evaluation."
}

# ---------------------------
# Embeddings pour chaque document
# ---------------------------
doc_keys = list(documents.keys())
doc_embeddings = [np.array(client.models.embed_content(
    model="gemini-embedding-001",
    contents=documents[k]
).embeddings[0].values) for k in doc_keys]

# ---------------------------
# Similarité cosinus
# ---------------------------
def cosine_similarity(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# ---------------------------
# Fonction de réponse
# ---------------------------
def answer_question(question):
    query_emb = np.array(client.models.embed_content(
        model="gemini-embedding-001",
        contents=question
    ).embeddings[0].values)

    similarities = [cosine_similarity(query_emb, doc_emb) for doc_emb in doc_embeddings]

    best_index = np.argmax(similarities)
    best_score = similarities[best_index]

    if best_score < 0.55:
        return "I don't know. The symptoms are not in my medical knowledge base."

    best_key = doc_keys[best_index]
    context = documents[best_key]

    prompt = f"""
    You are an AI health assistant.

    Use ONLY the information in the context to help analyze symptoms.
    Be a bit shorter please.
    
    Context:
    {context}

    Symptoms:
    {question}

    Give:
    - possible condition
    - advice
    - when to see a doctor

    Do not give a definitive diagnosis.
    """

    response = client.models.generate_content(
        model=MODEL,
        contents=prompt
    )

    return response.text

# ---------------------------
# Boucle interactive
# ---------------------------
print("Mini chatbot (tape 'exit' pour quitter)")
while True:
    user_question = input("\nVous: ")
    if user_question.lower() in ["exit", "quit"]:
        print("Au revoir !")
        break
    answer = answer_question(user_question)
    print(f"Bot: {answer}")