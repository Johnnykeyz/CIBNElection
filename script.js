        // Add interactive functionality
        document.addEventListener('DOMContentLoaded', function() {
            const navTabs = document.querySelectorAll('.nav-tab');
            const voteButton = document.querySelector('.vote-button');
            const mobileVoteBtn = document.querySelector('.mobile-vote-btn');
/*
            // Tab switching functionality
            navTabs.forEach(tab => {
                tab.addEventListener('click', function(e) {
                    e.preventDefault();
                    navTabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                });
            });
*/
            // Vote button click handler
            function handleVote() {
                window.location.href = 'https://evoting.cibng.org/';
                // redirect to the actual voting form
            }

            if (voteButton) {
                voteButton.addEventListener('click', handleVote);
            }

            if (mobileVoteBtn) {
                mobileVoteBtn.addEventListener('click', handleVote);
            }

            // Add floating particles effect
            function createParticle() {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: fixed;
                    width: 10px;
                    height: 10px;
                    background: rgba(217, 193, 37, 0.6);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: -1;
                    animation: float 6s linear infinite;
                `;
                
                particle.style.left = Math.random() * 100 + 'vw';
                particle.style.top = '100vh';
                
                document.body.appendChild(particle);
                
                setTimeout(() => {
                    particle.remove();
                }, 6000);
            }

            // Add CSS for particle animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes float {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);

            // Create particles periodically
            setInterval(createParticle, 3000);
        });
