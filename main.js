    // Simple skill-rotator + typing effect
    (function(){
      const skills = ['HTML5','CSS','JavaScript','Responsive UI','Python-powered features','App UI Cloning'];
      const el = document.getElementById('skillText');
      const mockHeading = document.getElementById('mock-heading');
      const mockSub = document.getElementById('mock-sub');
      let i = 0;

      function typeOut(word, target, speed=60){
        target.textContent = '';
        let j=0;
        return new Promise(resolve=>{
          const t = setInterval(()=>{
            target.textContent += word[j++]||'';
            if(j>word.length){clearInterval(t);setTimeout(resolve,700)}
          },speed);
        });
      }

      async function rotate(){
        while(true){
          const word = skills[i%skills.length];
          await typeOut(word, el, 55);
          // update mock area text for context
          mockHeading.textContent = word.includes('UI') ? 'UI Cloning Demo' : (word.includes('Python')? 'Python Feature' : 'Interactive UI');
          mockSub.textContent = word + ' — example component.';
          i++;
          await new Promise(r=>setTimeout(r,1200));
        }
      }
      rotate();

      // CTA interactions (examples)
      document.getElementById('seeWork').addEventListener('click', ()=>{
        // example behavior: scroll to #work (if present)
        const target = document.querySelector('#work');
        if(target) target.scrollIntoView({behavior:'smooth'});
        else alert('See my work — Link target not present in this demo.');
      });
      document.getElementById('contactMe').addEventListener('click', ()=>{
        // open mailto as a helpful default
        window.location.href = 'mailto:vishwakarmarohit0266@gmail.com?subject=Hi%20Rohit%20—%20Portfolio%20Inquiry';
      });

    })();
