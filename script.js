// script.js

// 1. IMPORT MODULES
import { introModule } from './intro.js';
import { anvoaModule } from './anovar.js';
import { caModule } from './ca.js';
import { discriminantMod } from './dis.js';
import { semModule } from './sem.js';
import { cluserMod } from './clustering.js';
import { mcaModule } from './mca.js';
import { treeModule } from './tree.js';
import { pcaModule } from './pca.js';

// If you create limit.js later, uncomment this:
// import { limitModule } from './limit.js';

document.addEventListener('DOMContentLoaded', () => {

    // 3. CENTRAL REGISTRY
    // These keys (e.g., 'anova', 'pca') MUST match the data-category attribute in your HTML buttons
    const CURRICULUM = {
            intro: introModule,     // Intro to R, Prac 1, Tut 1
        anova: anvoaModule,     // ANOVA+Reg, Prac 2, Prac 3, Tut 2
        pca: pcaModule,         // PCA+FA, Tut 3, Prac 4
        ca: caModule,           // CA, Tut 4, Prac 5
        mca: mcaModule,         // MCA+IRA, Tut 5
        cluster: cluserMod,     // Clustering + MDS, Prac 6, Tut 6
        dis: discriminantMod,   // Discriminant, Prac 7, Tut 7
        tree: treeModule,       // Decision Trees, Tut 8
        sem: semModule          // SEM
        // lim: limitModule // Add this when ready
    };

    // =========================================================================
    // UI CONTROLLER
    // =========================================================================

    const topicMenu = document.getElementById('topic-menu');
    const topicRoot = document.getElementById('topic-root');
    const navTabs = document.querySelectorAll('.nav-tab');

    // Handle Main Category Navigation
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // UI Update for tabs
            navTabs.forEach(t => {
                t.classList.remove('bg-white/20', 'text-white', 'shadow-md');
                t.classList.add('btn-ghost');
            });

            tab.classList.remove('btn-ghost');
            tab.classList.add('bg-white/20', 'text-white', 'shadow-md');

            const categoryId = tab.getAttribute('data-category');
            renderSidebar(categoryId);
        });
    });

    // Render Sidebar with Subtopics
    function renderSidebar(categoryId) {
        const module = CURRICULUM[categoryId];
        
        topicMenu.innerHTML = '';
        topicMenu.style.opacity = '0';

        if (!module) {
            console.error(`Module not found for category: ${categoryId}`);
            return;
        }

        setTimeout(() => {
            module.subtopics.forEach((sub) => {
                const btn = document.createElement('button');
                btn.className = `w-full text-left px-4 py-3 rounded-lg transition-all duration-200 hover:bg-white/10 flex items-center justify-between group`;
                btn.innerHTML = `
                    <span class="text-sm font-medium opacity-80 group-hover:opacity-100 group-hover:pl-1 transition-all">${sub.title}</span>
                    <span class="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                `;
                
                btn.addEventListener('click', () => {
                    Array.from(topicMenu.children).forEach(c => c.classList.remove('bg-accent/20', 'border-l-2', 'border-accent'));
                    btn.classList.add('bg-accent/20', 'border-l-2', 'border-accent');
                    renderContent(categoryId, sub.id);
                });

                topicMenu.appendChild(btn);
            });
            topicMenu.style.opacity = '1';
        }, 150);
    }

   // Render Main Content
    function renderContent(moduleId, topicId) {
        const module = CURRICULUM[moduleId];
        const data = module.content[topicId];

        if (!data) return;

        // Fade out
        topicRoot.style.opacity = '0';
        topicRoot.style.transform = 'translateY(10px)';

        setTimeout(() => {
            // Inject HTML
            topicRoot.innerHTML = `
                <div class="animate-fadeIn">
                    <h2 class="text-3xl font-extrabold mb-6 border-b border-white/10 pb-4">${data.title}</h2>
                    <div class="prose prose-invert max-w-none text-gray-300 leading-relaxed">
                        ${data.html}
                    </div>
                </div>
            `;
            
            // Fade in
            topicRoot.style.opacity = '1';
            topicRoot.style.transform = 'translateY(0)';

            // Trigger MathJax to render LaTeX equations if present
            if (window.MathJax) {
                MathJax.typesetPromise([topicRoot]).catch((err) => console.log('MathJax error:', err));
            }

        }, 200);
    }
    // Add this inside the DOMContentLoaded block in script.js

document.addEventListener('click', (e) => {
    // Check if the clicked element is the "Run Analysis" button
    if (e.target && e.target.id === 'calc-run-btn') {
        runCalculatorLogic();
    }
});

function runCalculatorLogic() {
    const inputField = document.getElementById('stats-input');
    const resultsArea = document.getElementById('stats-results');
    
    if (!inputField || !resultsArea) return;

    const input = inputField.value;
    // Clean data: split by comma, convert to numbers, remove NaNs
    const arr = input.split(',')
                     .map(n => parseFloat(n.trim()))
                     .filter(n => !isNaN(n));
    
    if (arr.length < 2) {
        alert('Please enter at least two numbers separated by commas (e.g., 10, 12, 14)');
        return;
    }

    // 1. Calculate Mean
    const n = arr.length;
    const mean = arr.reduce((a, b) => a + b) / n;

    // 2. Calculate Variance (n-1 for sample variance)
    const variance = arr.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (n - 1);

    // 3. Calculate Std Dev
    const sd = Math.sqrt(variance);

    // Update UI
    document.getElementById('res-mean').innerText = mean.toFixed(3);
    document.getElementById('res-var').innerText = variance.toFixed(3);
    document.getElementById('res-sd').innerText = sd.toFixed(3);
    
    // Show the results div
    resultsArea.classList.remove('hidden');

    // Trigger MathJax to re-render the results if they have formulas
    if (window.MathJax) {
        MathJax.typesetPromise([resultsArea]);
    }
}

    // Initialize - Loads the first module automatically (PCA in this case)
    // Make sure your HTML has a button like: <button class="nav-tab" data-category="pca">PCA</button>
    const firstTab = document.querySelector('.nav-tab'); 
    if (firstTab) firstTab.click();
});