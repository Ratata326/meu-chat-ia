export default async function handler(req, res) {
    // Este código roda escondido no servidor do Vercel
    const response = await fetch('https://api.deepseek.com/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.DEEPSEEK_KEY}` // Pega a chave dos "Secrets"
        },
        body: JSON.stringify({
            model: "deepseek-chat",
            messages: [{ role: "user", content: req.body.message }]
        })
    });

    const data = await response.json();
    return res.status(200).json(data);
}
