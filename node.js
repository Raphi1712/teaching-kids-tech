
const http = require('http');

const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {

	console.log('OPTIONS request received');
	if (req.method === 'OPTIONS') {
		res.writeHead(204, {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type, Authorization',
		});
		res.end();
		return;
	}

	if (req.method === 'POST' && req.url === '/api/chat') {
		console.log('Anfrage an /api/chat erhalten');
		let body = '';

		req.on('data', (chunk) => {
			body += chunk;
		});

		req.on('end', async () => {

			const data = body ? JSON.parse(body) : {};
			const userMessage = data.message || '';
			const note = typeof data.note === 'string' ? data.note.trim() : '';
			const solution = typeof data.solution === 'string' ? data.solution.trim() : '';
			const currentCode = typeof data.code === 'string' ? data.code.trim() : '';
			const output = typeof data.output === 'string' ? data.output.trim() : ''; 
			const task = typeof data.task === 'string' ? data.output.trim() : ''; 	
			const explaniation = typeof data.explaniation === 'string' ? data.explaniation.trim() : '';
			const messages = [
				{
					role: 'system',
					content: [
						note && `Aufgabenhinweis:\n${note}`,
						output && `Context:\n${data.output}`,
						solution && `Musterlösung des levels:\n${solution}`,
						currentCode && `Aktueller Code:\n${currentCode}`,
						task && `Aufgabe:\n${task}`,
						explaniation && `Erklärung:\n${explaniation}`
					].filter(Boolean).join('\n\n')
				},
				{
					role: 'user',
					content: userMessage
				}
			];
			console.log(process.env.OPENROUTER_API_KEY)
			const orRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {

				method: 'POST',
				headers: {
             'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					model: 'openrouter/free',
					messages: messages,
				})
			});

			console.log("OpenRouter status:", orRes.status);
			const orData = await orRes.json();
			console.log('Antwort von OpenRouter:', orData);
			const reply = orData?.choices?.[0]?.message?.content || 'Keine Antwort erhalten';
			console.log('Antwort an Frontend:', reply);
			// 3) Antwort an dein Frontend
			res.writeHead(200, {
				'Content-Type': 'application/json; charset=utf-8',
				'Access-Control-Allow-Origin': '*'
			});
			res.end(JSON.stringify({ reply }));
		});

		return;
	}

	res.writeHead(404, {
		'Content-Type': 'application/json; charset=utf-8',
		'Access-Control-Allow-Origin': '*',
	});
	res.end(JSON.stringify({ error: 'Route nicht gefunden' }));
});

server.listen(PORT, "0.0.0", () => {
	console.log(`Server läuft auf http://localhost:${PORT}`);
});
