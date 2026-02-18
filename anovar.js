// anovar.js
export const anvoaModule = {
    id: 'anova',
    title: 'ANOVA & Multiple Linear Regression',
    subtopics: [
        { id: 'mlr-def', title: '1. MLR: Definition & Aim' },
        { id: 'mlr-assumptions', title: '2. Model Assumptions' },
        { id: 'mlr-intercept', title: '3. The Intercept Term' },
        { id: 'mlr-estimation', title: '4. Estimation: Simultaneous vs Stepwise' },
        { id: 'mlr-r-code', title: '5. R Implementation (lm)' }
    ],
    content: {
        'mlr-def': {
            title: 'Multiple Linear Regression (MLR)',
            html: `
                <div class="space-y-6">
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <h4 class="text-accent font-bold mb-4">Definition</h4>
                        <p class="text-sm text-gray-300 leading-relaxed">
                            MLR models the relationship between a single <strong>dependent variable (Y)</strong> and one or more <strong>independent variables (X<sub>i</sub>)</strong>.
                        </p>
                        <div class="bg-black/40 p-5 rounded-lg border border-white/5 text-center my-4">
                            <p class="text-[10px] text-accent uppercase mb-2">The Population Model</p>
                            <div class="text-xl">
                                $$Y = \\beta_0 + \\beta_1 X_1 + \\beta_2 X_2 + \\dots + \\beta_p X_p + \\epsilon$$
                            </div>
                        </div>
                    </section>

                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <h4 class="text-accent font-bold mb-4">The Aim</h4>
                        <p class="text-sm text-gray-300">
                            To construct a function able to explain the <strong>maximum amount of variation</strong> in $Y$ using a set of $X$ predictors.
                        </p>
                        <div class="mt-4 p-4 bg-accent/10 border-l-4 border-accent rounded">
                            <p class="text-xs italic">"We choose values for the $\\beta$ coefficients so that our predictions are as close to the true values as possible."</p>
                        </div>
                    </section>
                </div>
            `
        },

        'mlr-assumptions': {
            title: 'Model Assumptions',
            html: `
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-black/30 p-4 rounded-lg border border-white/5">
                        <h5 class="text-accent font-bold text-sm mb-2">Normality</h5>
                        <p class="text-xs text-gray-400">Y must be continuous and normally distributed. Check via Histograms or <strong>Shapiro-Wilk</strong> tests.</p>
                    </div>
                    <div class="bg-black/30 p-4 rounded-lg border border-white/5">
                        <h5 class="text-accent font-bold text-sm mb-2">X Variables</h5>
                        <p class="text-xs text-gray-400">Independent variables (X) can be either <strong>continuous</strong> or <strong>categorical</strong>.</p>
                    </div>
                    <div class="bg-black/30 p-4 rounded-lg border border-white/5">
                        <h5 class="text-accent font-bold text-sm mb-2">Linearity</h5>
                        <p class="text-xs text-gray-400">There must be a linear relationship between the dependent variable $Y$ and each predictor $X_i$.</p>
                    </div>
                </div>
            `
        },

        'mlr-intercept': {
            title: 'Importance of the Intercept ($\\beta_0$)',
            html: `
                <div class="space-y-6">
                    <p class="text-sm text-gray-300">A model without an intercept implies that when all $X=0$, then $Y$ must also be $0$. In most real-world scenarios, an intercept is necessary to provide a better fit.</p>
                    
                    <div class="bg-black/20 p-6 rounded-xl border border-white/5">
                        <h4 class="text-center text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Intercept vs. No Intercept</h4>
                        <svg viewBox="0 0 400 200" class="w-full h-auto overflow-visible">
                            <line x1="40" y1="180" x2="380" y2="180" stroke="white" stroke-width="1" />
                            <line x1="40" y1="180" x2="40" y2="20" stroke="white" stroke-width="1" />
                            
                            <!-- No Intercept Line (Starts at 0,0) -->
                            <line x1="40" y1="180" x2="350" y2="50" stroke="#ef4444" stroke-width="2" />
                            <text x="360" y="55" fill="#ef4444" font-size="10">No Intercept ($\\beta_0=0$)</text>

                            <!-- With Intercept (Starts higher) -->
                            <line x1="40" y1="140" x2="350" y2="80" stroke="#22d3ee" stroke-width="2" />
                            <text x="360" y="85" fill="#22d3ee" font-size="10">With Intercept</text>

                            <!-- Data Points -->
                            <circle cx="100" cy="130" r="3" fill="white" opacity="0.4" />
                            <circle cx="150" cy="110" r="3" fill="white" opacity="0.4" />
                            <circle cx="200" cy="120" r="3" fill="white" opacity="0.4" />
                            <circle cx="250" cy="90" r="3" fill="white" opacity="0.4" />
                        </svg>
                    </div>
                </div>
            `
        },

        'mlr-estimation': {
            title: 'Methods of Estimation',
            html: `
                <div class="space-y-8">
                    <div class="bg-white/5 p-5 rounded-lg border border-white/10">
                        <h4 class="text-lg font-bold text-accent mb-2">1. Simultaneous Estimation</h4>
                        <p class="text-sm text-gray-300">Includes <strong>all</strong> independent variables in the final model, regardless of whether they are statistically significant.</p>
                    </div>

                    <div class="bg-white/5 p-5 rounded-lg border border-white/10">
                        <h4 class="text-lg font-bold text-accent mb-2">2. Stepwise Approach</h4>
                        <p class="text-sm text-gray-300 mb-4">Variables must be <strong>statistically significant</strong> to enter the model.</p>
                        <ol class="list-decimal ml-6 text-sm text-gray-400 space-y-2">
                            <li>Start with the variable having the <strong>strongest correlation</strong> with $Y$.</li>
                            <li>Pair it with remaining variables one at a time.</li>
                            <li>Add the variable that offers the best <strong>statistically significant improvement</strong>.</li>
                            <li>Repeat until no more variables improve the model significantly.</li>
                        </ol>
                    </div>
                </div>
            `
        },

        'mlr-r-code': {
            title: 'R Implementation & Output',
            html: `
                <div class="space-y-6">
                    <div class="bg-black/50 p-4 rounded-lg font-mono text-sm border border-accent/20">
                        <p class="text-accent"># Fit the model</p>
                        <p class="text-white">model <- lm(Sales ~ TV + Radio + Newspaper, data = Advertising)</p>
                        <br>
                        <p class="text-accent"># View results</p>
                        <p class="text-white">summary(model)</p>
                    </div>

                    <div class="bg-white/5 p-5 rounded-xl border border-white/10">
                        <h4 class="text-sm font-bold mb-4">Key Output Terms (Slide 15)</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-3 bg-blue-500/10 rounded border border-blue-500/30">
                                <span class="block text-blue-300 font-bold">Estimate (OLS)</span>
                                <p class="text-xs">The calculated $\\beta$ coefficients using Ordinary Least Squares.</p>
                            </div>
                            <div class="p-3 bg-red-500/10 rounded border border-red-500/30">
                                <span class="block text-red-300 font-bold">Pr(>|t|)</span>
                                <p class="text-xs">The <strong>p-values</strong>. If < 0.05, the variable is a significant predictor.</p>
                            </div>
                            <div class="p-3 bg-green-500/10 rounded border border-green-500/30">
                                <span class="block text-green-300 font-bold">Multiple R-squared</span>
                                <p class="text-xs">Percentage of variation in $Y$ explained by the model.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    }
};