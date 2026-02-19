// anovar.js
export const anvoaModule = {
    id: 'anova',
    title: 'ANOVA & Multiple Linear Regression',
    subtopics: [
        { id: 'mlr-def', title: '1. MLR: Definition & Aim' },
        { id: 'mlr-assumptions', title: '2. Model Assumptions' },
        { id: 'mlr-intercept', title: '3. The Intercept Term' },
        { id: 'mlr-estimation', title: '4. Estimation: Simultaneous vs Stepwise' },
        { id: 'mlr-r-code', title: '5. R Implementation (lm)' },
        { id: 'mlr-ex1', title: 'Example 1: Advertising Data' },
        { id: 'mlr-ex2-setup', title: 'Example 2: Strike Severity (Setup)' },
        { id: 'mlr-ex2-analysis', title: 'Example 2: Strike Severity (Results)' }
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
        },
         'mlr-ex1': {
            title: 'Example 1: Advertising Data',
            html: `
                <div class="space-y-6">
                    <p class="text-sm text-gray-300">Aim: Model the relationship between <strong>Sales</strong> and money spent on <strong>TV advertisements</strong>.</p>
                    
                    <div class="bg-black/40 p-4 rounded-lg text-center font-mono border border-white/5">
                        Sales = $\\beta_0 + \\beta_1 \\times$ TV
                    </div>

                    <div class="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h4 class="text-center text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Scatter Plot with Best Fitted Line (Slide 6)</h4>
                        <div class="flex justify-center">
                            <svg viewBox="0 0 300 200" class="w-full max-w-md h-auto overflow-visible">
                                <line x1="40" y1="180" x2="280" y2="180" stroke="white" stroke-width="1" />
                                <line x1="40" y1="180" x2="40" y2="20" stroke="white" stroke-width="1" />
                                
                                <!-- Scatted Points -->
                                <circle cx="60" cy="150" r="2" fill="cyan" opacity="0.6" />
                                <circle cx="80" cy="140" r="2" fill="cyan" opacity="0.6" />
                                <circle cx="100" cy="120" r="2" fill="cyan" opacity="0.6" />
                                <circle cx="130" cy="100" r="2" fill="cyan" opacity="0.6" />
                                <circle cx="170" cy="90" r="2" fill="cyan" opacity="0.6" />
                                <circle cx="210" cy="70" r="2" fill="cyan" opacity="0.6" />
                                <circle cx="250" cy="50" r="2" fill="cyan" opacity="0.6" />

                                <!-- Fitted Line -->
                                <line x1="40" y1="165" x2="280" y2="45" stroke="#E11D48" stroke-width="2" />
                                <text x="220" y="40" fill="#E11D48" font-size="10" font-weight="bold">Best Fitted Line</text>

                                <text x="160" y="195" fill="white" font-size="8" text-anchor="middle">TV (in thousand $)</text>
                                <text x="15" y="100" fill="white" font-size="8" text-anchor="middle" transform="rotate(-90, 15, 100)">Sales (units)</text>
                            </svg>
                        </div>
                    </div>

                    <div class="bg-accent/10 p-4 rounded border border-accent/20 text-center">
                        <p class="text-sm font-bold">Fitted Coefficients:</p>
                        <p class="text-xl">$\\beta_0 = 7.03$ | $\\beta_1 = 0.048$</p>
                    </div>
                </div>
            `
        },

        'mlr-ex2-setup': {
            title: 'Example 2: Strike Severity',
            html: `
                <div class="space-y-6">
                    <p class="text-sm text-gray-300 leading-relaxed">
                        Study aims to explain <strong>Strike Severity</strong> (days lost) as a function of economic and political factors across 18 OECD countries (Slide 10-11).
                    </p>

                    <div class="overflow-x-auto">
                        <table class="w-full text-[10px] text-left border-collapse bg-white/5 rounded-lg overflow-hidden">
                            <thead class="bg-white/10 text-accent font-bold uppercase">
                                <tr>
                                    <th class="p-2 border-r border-white/5">ID</th>
                                    <th class="p-2 border-r border-white/5">Y (Strike)</th>
                                    <th class="p-2 border-r border-white/5">X1 (Unempl)</th>
                                    <th class="p-2 border-r border-white/5">X2 (Infl)</th>
                                    <th class="p-2 border-r border-white/5">X3 (LaborParl)</th>
                                    <th class="p-2 border-r border-white/5">X4 (UnionCent)</th>
                                    <th class="p-2">X5 (Decade)</th>
                                </tr>
                            </thead>
                            <tbody class="text-gray-400 font-mono">
                                <tr class="border-b border-white/5"><td class="p-2">1</td><td class="p-2">408</td><td class="p-2">3.6</td><td class="p-2">2.5</td><td class="p-2">57.3</td><td class="p-2">0</td><td class="p-2">60s</td></tr>
                                <tr class="border-b border-white/5"><td class="p-2">2</td><td class="p-2">3</td><td class="p-2">5.5</td><td class="p-2">9.1</td><td class="p-2">34.7</td><td class="p-2">0.75</td><td class="p-2">70s</td></tr>
                                <tr class="border-b border-white/5"><td class="p-2">3</td><td class="p-2">141</td><td class="p-2">2.2</td><td class="p-2">8</td><td class="p-2">34.7</td><td class="p-2">0.75</td><td class="p-2">70s</td></tr>
                                <tr class="border-b border-white/5"><td class="p-2">4</td><td class="p-2">0</td><td class="p-2">0.4</td><td class="p-2">2</td><td class="p-2">29.1</td><td class="p-2">0.5</td><td class="p-2">50s</td></tr>
                                <tr><td class="p-2">...</td><td class="p-2">...</td><td class="p-2">...</td><td class="p-2">...</td><td class="p-2">...</td><td class="p-2">...</td><td class="p-2">...</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="bg-black/40 p-5 rounded-lg border border-white/5">
                        <h4 class="text-xs font-bold uppercase text-accent mb-4">Initial Visualisation (Slide 13)</h4>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="bg-white/5 p-2 rounded text-center">
                                <p class="text-[9px] mb-2">Inflation vs Volume</p>
                                <svg viewBox="0 0 100 80" class="w-full h-auto"><path d="M 10 70 L 90 70 M 10 70 L 10 10" stroke="white" stroke-width="0.5"/><circle cx="20" cy="60" r="1" fill="white"/><circle cx="30" cy="55" r="1" fill="white"/><circle cx="50" cy="65" r="1" fill="white"/><circle cx="70" cy="50" r="1" fill="white"/></svg>
                            </div>
                            <div class="bg-white/5 p-2 rounded text-center">
                                <p class="text-[9px] mb-2">Unempl vs Volume</p>
                                <svg viewBox="0 0 100 80" class="w-full h-auto"><path d="M 10 70 L 90 70 M 10 70 L 10 10" stroke="white" stroke-width="0.5"/><circle cx="20" cy="40" r="1" fill="white"/><circle cx="40" cy="60" r="1" fill="white"/><circle cx="60" cy="55" r="1" fill="white"/><circle cx="80" cy="65" r="1" fill="white"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        'mlr-ex2-analysis': {
            title: 'Strike Severity: R Output Analysis',
            html: `
                <div class="space-y-6">
                    <p class="text-sm text-gray-300">Fitting the model using the <strong>Simultaneous Estimation Approach</strong> in R (Slide 15):</p>
                    
                    <div class="bg-black/60 p-5 rounded-xl border border-white/10 font-mono text-[11px] leading-tight overflow-x-auto">
                        <p class="text-accent mb-2">> summary(modelAll)</p>
                        <p class="text-white/60 mb-4">Coefficients:</p>
                        <table class="w-full text-left">
                            <thead>
                                <tr class="text-white border-b border-white/10">
                                    <th class="py-1">Variable</th>
                                    <th class="py-1">Estimate</th>
                                    <th class="py-1">Std. Error</th>
                                    <th class="py-1">t value</th>
                                    <th class="py-1">Pr(>|t|)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>(Intercept)</td><td>312.851</td><td>90.953</td><td>3.440</td><td class="text-accent">0.000621 ***</td></tr>
                                <tr><td>Unempl</td><td>17.490</td><td>7.361</td><td>2.376</td><td class="text-accent">0.017798 *</td></tr>
                                <tr><td>Inflation</td><td>19.420</td><td>4.701</td><td>4.131</td><td class="text-accent">4.10e-05 ***</td></tr>
                                <tr><td>LaborParl</td><td>-0.141</td><td>1.640</td><td>-0.086</td><td>0.931522</td></tr>
                                <tr><td>UnionCent</td><td>-400.568</td><td>70.836</td><td>-5.655</td><td class="text-accent">2.38e-08 ***</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="bg-white/5 p-5 rounded-xl border border-white/10 shadow-lg">
                        <h4 class="text-accent font-bold mb-4">Critical Interpretation</h4>
                        <ul class="space-y-3 text-xs text-gray-300">
                            <li class="flex gap-2">
                                <span class="text-accent">●</span>
                                <p><strong>Significance:</strong> Unemployment, Inflation, and Union Centralisation are all <strong>statistically significant</strong> (p < 0.05).</p>
                            </li>
                            <li class="flex gap-2">
                                <span class="text-accent">●</span>
                                <p><strong>Negative Impact:</strong> <strong>UnionCent</strong> has an estimate of -400.56. This means as union centralization increases, strike severity <strong>decreases</strong> significantly.</p>
                            </li>
                            <li class="flex gap-2">
                                <span class="text-accent">●</span>
                                <p><strong>R-squared:</strong> 0.09833. This indicates that only about 9.8% of the variation in strike volume is explained by this specific model.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            `
        }
        
    }
};