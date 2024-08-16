function showPopup(topic) {
  const popup = document.getElementById("popup");
  const popupText = document.getElementById("popup-text");
  const blurOverlay = document.querySelector(".blur-overlay");
  popup.style.display = "flex";
  blurOverlay.style.backdropFilter = "blur(20px)";

  let content = "";
  switch (topic) {
    case "depression":
      content = `
                        <h2>Depression</h2>
                        <p>Depression is a common mental health disorder characterized by persistent feelings of sadness, hopelessness, and loss of interest in activities.</p>
                        <h3>Why does it occur?</h3>
                        <ul>
                            <li>Biological factors</li>
                            <li>Environmental factors</li>
                            <li>Psychological factors</li>
                            <li>Genetic factors</li>
                        </ul>
                        <h3>How to cope:</h3>
                        <ul>
                            <li>Seek professional help</li>
                            <li>Practice self-care</li>
                            <li>Engage in regular exercise</li>
                            <li>Maintain a healthy diet</li>
                            <li>Connect with supportive people</li>
                        </ul>
                    `;
      break;
    case "anxiety":
      content = `
                        <h2>Anxiety</h2>
                        <p>Anxiety is a normal emotion characterized by feelings of worry, nervousness, or unease about uncertain outcomes.</p>
                        <h3>Why does it occur?</h3>
                        <ul>
                            <li>Stress</li>
                            <li>Traumatic experiences</li>
                            <li>Genetic factors</li>
                            <li>Medical conditions</li>
                        </ul>
                        <h3>How to manage anxiety:</h3>
                        <ul>
                            <li>Practice relaxation techniques</li>
                            <li>Challenge negative thoughts</li>
                            <li>Maintain a healthy lifestyle</li>
                            <li>Seek professional help if needed</li>
                        </ul>
                    `;
      break;
    case "self-harm":
      content = `
                        <h2>Self-Harm</h2>
                        <p>Self-harm is when someone intentionally hurts themselves as a way of dealing with difficult feelings or experiences.</p>
                        <h3>Why it happens:</h3>
                        <ul>
                            <li>To cope with overwhelming emotions</li>
                            <li>To express pain or distress</li>
                            <li>To punish oneself</li>
                            <li>To feel a sense of control</li>
                        </ul>
                        <h3>Getting help:</h3>
                        <ul>
                            <li>Reach out to a trusted person</li>
                            <li>Seek professional help</li>
                            <li>Learn healthy coping mechanisms</li>
                            <li>Join support groups</li>
                        </ul>
                        <p>If you're having thoughts of self-harm, please reach out for help immediately.</p>
                    `;
      break;
    case "therapy":
      content = `
                        <h2>Therapy Places in Ethiopia</h2>
                        <ul>
                            <li>Addis Ababa  - </li>
                            <li>Mekelle  - </li>
                            <li>Bahir Dar  - </li>
                            <li>Adama - </li>
                            <li>Dire Dawa  -</li>
                        </ul>
                        <p>Still In progress.</p>
                    `;
      break;
    case "movies":
      content = `
                        <h2>Recommended Movies</h2>
                        <ul>
                            <li>Inside Out (2015)</li>
                            <li>A Beautiful Mind (2001)</li>
                            <li>Good Will Hunting (1997)</li>
                            <li>Silver Linings Playbook (2012)</li>
                            <li>It's Kind of a Funny Story (2010)</li>
                        </ul>
                    `;
      break;
    case "books":
      content = `
                        <h2>Recommended Books</h2>
                        <ul>
                            <li>"Feeling Good: The New Mood Therapy" by David D. Burns</li>
                            <li>"The Happiness Trap" by Russ Harris</li>
                            <li>"Lost Connections" by Johann Hari</li>
                            <li>"Man's Search for Meaning" by Viktor E. Frankl</li>
                            <li>"The Body Keeps the Score" by Bessel van der Kolk</li>
                            <li>"Reasons to Stay Alive" by Matt Haig</li>
                        </ul>
                    `;
      break;
    case "podcasts":
      content = `
                        <h2>Recommended Podcasts</h2>
                        <ul>
                            <li><a href="https://www.youtube.com/watch?v=Xu1FMCxoEFc&t=6s&pp=ygUaYW5kcmV3IGh1YmVybWFuIGRlcHJlc3Npb24%3D" class="underline-link" target="_blank">Understanding & Conquering Depression with Dr. Andrew Huberman</a></li>
                            <li><a href="https://www.youtube.com/watch?v=ntfcfJ28eiU" class="underline-link" target="_blank">Tools for Managing Stress & Anxiety with Dr. Andrew Huberman</a></li>
                            <li><a href="https://www.youtube.com/watch?v=QoZTww2xnbM" class="underline-link" target="_blank">A Message to Someone With Suicidal Thoughts with Dr. Jordan b. peterson</a></li>
                            <li><a href="https://www.youtube.com/watch?v=WTNjc8HyOaE" class="underline-link" target="_blank"> Joe Rogan Experience #2109 - Abigail Shrier </a></li>
                            <li><a href="https://www.youtube.com/watch?v=TVgQ_tgWMyU" class="underline-link" target="_blank">How to recover from depression with Dr Michael Yapko</a></li>
                        </ul>
                    `;
      break;
    case "apps":
      content = `
                        <h2>Helpful Mobile Apps</h2>
                        <h3>For iOS and Android:</h3>
                        <ul>
                            <li>Headspace (Meditation and mindfulness)</li>
                            <li>Day One (Depression and anxiety)</li>
                            <li>Daylio (Mood Tracker)</li>
                        </ul>
                    `;
      break;
  }
  popupText.innerHTML = content;
}

function closePopup() {
  const popup = document.getElementById("popup");
  const blurOverlay = document.querySelector(".blur-overlay");
  popup.style.display = "none";
  blurOverlay.style.backdropFilter = "blur(10px)";
}

function joinTelegram(event) {
  event.preventDefault();
  alert(
    "Thank you for joining our community! You will be redirected to our Telegram group shortly."
  );
  window.location.href = "https://t.me/+sNieG2dcbu1jYTNk";
}
