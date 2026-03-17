// /* ─── LANGUAGES (LIMITED) ─── */
// const LANGUAGES = [
// { code: 'en', label: 'English' },
// { code: 'hi', label: 'Hindi' },
// { code: 'ta', label: 'Tamil' }
// ];

// const srcLang = document.getElementById("srcLang");
// const tgtLang = document.getElementById("tgtLang");

// function populateSelect(el, selected) {
// el.innerHTML = LANGUAGES.map(l =>
// `<option value="${l.code}" ${l.code === selected ? 'selected' : ''}>${l.label}</option>`
// ).join("");
// }

// populateSelect(srcLang, "en");
// populateSelect(tgtLang, "ta");

// /* ─── SWAP ─── */
// document.getElementById("swapBtn").onclick = () => {
// let temp = srcLang.value;
// srcLang.value = tgtLang.value;
// tgtLang.value = temp;
// };

// /* ─── WEBSOCKET ─── */
// let ws;

// function connectWebSocket() {
//   ws = new WebSocket("wss://unsubrogated-monochromatically-destinee.ngrok-free.dev/ws");

//   ws.onmessage = (event) => {
// const parsed = JSON.parse(event.data);

// ```
// addBubble("srcBubbles", parsed.asr_text);
// addBubble("tgtBubbles", parsed.translated_text);

// if (parsed.audio_base64) {
//   playAudioFromBase64(parsed.audio_base64);
// }
// ```

//   ws.onopen = () => {
//     console.log("✅ Connected to backend");
//   };

//   ws.onerror = (err) => {
//     console.log("❌ WebSocket error:", err);
//   };

//   ws.onclose = () => {
//     console.log("⚠️ WebSocket closed");
//   };

//   ws.onmessage = (event) => {
//     console.log("📩 Data received:", event.data);
//   };
// }
// // function connectWebSocket() {
// // ws = new WebSocket("wss://unsubrogated-monochromatically-destinee.ngrok-free.dev/ws");

// // ws.onmessage = (event) => {
// // const parsed = JSON.parse(event.data);

// // ```
// // addBubble("srcBubbles", parsed.asr_text);
// // addBubble("tgtBubbles", parsed.translated_text);

// // if (parsed.audio_base64) {
// //   playAudioFromBase64(parsed.audio_base64);
// // }
// // ```

// };

// connectWebSocket();

// /* ─── RECORDING ─── */
// let mediaRecorder;
// let audioChunks = [];

// async function startRecording() {
// audioChunks = [];

// const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

// mediaRecorder = new MediaRecorder(stream);

// mediaRecorder.ondataavailable = e => audioChunks.push(e.data);

// mediaRecorder.start();
// document.getElementById("statusText").innerText = "Listening...";
// }

// function stopRecording() {
// mediaRecorder.stop();

// document.getElementById("statusText").innerText = "Processing...";

// mediaRecorder.onstop = async () => {
// const blob = new Blob(audioChunks, { type: "audio/webm" });
// const buffer = await blob.arrayBuffer();
// const uint8Array = new Uint8Array(buffer);

// ```
// ws.send(JSON.stringify({
//   src: srcLang.value,
//   tgt: tgtLang.value
// }));

// setTimeout(() => {
//   ws.send(uint8Array);
// }, 100);
// ```

// };
// }

// /* ─── BUTTONS ─── */
// document.getElementById("startBtn").onclick = startRecording;
// document.getElementById("stopBtn").onclick = stopRecording;
// document.getElementById("micBtn").onclick = startRecording;

// /* ─── UI BUBBLES ─── */
// function addBubble(containerId, text) {
// const container = document.getElementById(containerId);

// const div = document.createElement("div");
// div.textContent = text;

// container.appendChild(div);
// }

// /* ─── AUDIO PLAYBACK ─── */
// function playAudioFromBase64(base64) {
// const binary = atob(base64);
// const bytes = new Uint8Array(binary.length);

// for (let i = 0; i < binary.length; i++) {
// bytes[i] = binary.charCodeAt(i);
// }

// const blob = new Blob([bytes], { type: "audio/mp3" });
// const url = URL.createObjectURL(blob);

// new Audio(url).play();
// }
