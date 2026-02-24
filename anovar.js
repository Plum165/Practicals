// anovar.js
export const anvoaModule = {
    id: 'anova',
    title: 'ANOVA & Multiple Linear Regression',
    subtopics: [
    { id: 'mlr-def', title: '1. MLR: Definition & Aim' },
    { id: 'mlr-assumptions', title: '2. Model Assumptions' },
    { id: 'mlr-quality', title: '3. Evaluating Model Quality (F & R²)' }, // NEW
    { id: 'mlr-intercept', title: '4. The Intercept Term' },
    { id: 'mlr-estimation', title: '5. Estimation: Simultaneous vs Stepwise' },
    { id: 'mlr-r-code', title: '6. R Implementation & Output' },
    { id: 'mlr-prediction', title: '7. Prediction & Interpretation' }, // NEW
    { id: 'mlr-prediction', title: '8. Prediction & Direction of Effects' },
    { id: 'mlr-importance', title: '9. Magnitude vs Importance' },
    { id: 'mlr-significance', title: '10. Individual Variable Significance' },
    { id: 'mlr-stepwise-r', title: '11. Stepwise Regression in R' }, // NEW (Slide 3-5)
    { id: 'mlr-ci', title: '12. Confidence Intervals' },             // NEW (Slide 6)
    { id: 'mlr-categorical', title: '13. Categorical & Dummy Variables' }, // NEW (Slide 7-8)
    { id: 'mlr-ex1', title: 'Example 1: Advertising Data' },
    { id: 'mlr-ex2-setup', title: 'Example 2: Strike Severity (Setup)' },
    { id: 'mlr-ex2-analysis', title: 'Example 2: Strike Severity (Results)' },    
    { id: 'mlr-ex2-conclusion', title: 'Ex 2: Summary (Strike Severity)' },

    { id: 'mlr-ex2-cat', title: 'Ex 2: Categorical Analysis' },  // NEW (Slide 10-13)
    { id: 'mlr-advanced', title: '13. Interactions & Outliers' } ,   // NEW (Slide 14)

    { id: 'anova-intro', title: '14. Intro to ANOVA' },
    { id: 'anova-partition', title: '15. Partitioning Sum of Squares' },
    { id: 'anova-math', title: '16. ANOVA Mathematical Notation' },
    { id: 'anova-table', title: '17. The ANOVA Table & Decision' },
    { id: 'anova-types', title: '18. Types of ANOVA' },

    //Slide deck ANOVA Part 2
    { id: 'anova-ex1-setup', title: '19. Ex 1: Foster Rats (Setup)' },
    { id: 'anova-ex1-math', title: '20. Ex 1: Partitioning Sum of Squares' },
    { id: 'anova-ex1-r', title: '21. Ex 1: R Output & Interpretation' },
    { id: 'anova-posthoc', title: '22. Post-hoc: Scheffé’s Method' },
    { id: 'anova-ex1-posthoc', title: '23. Ex 1: Pairwise Comparisons' }

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
        },
        'mlr-r-code': {
    title: 'R Implementation & Output Evaluation',
    html: `
        <div class="space-y-6">
            <div class="bg-black/50 p-4 rounded-lg font-mono text-sm border border-accent/20">
                <p class="text-accent"># Step 1: Evaluate Overall Model Quality</p>
                <p class="text-white">summary(modelAll)</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-white/5 p-4 rounded-xl border border-white/10">
                    <h4 class="text-accent font-bold text-xs uppercase mb-2">1. The F-Test</h4>
                    <p class="text-[11px] text-gray-400 mb-2">Tests if <strong>any</strong> independent variable has influence.</p>
                    <div class="text-xs space-y-1">
                        <p>$H_0: \\beta_1 = \\beta_2 = \\dots = \\beta_p = 0$</p>
                        <p>$H_1: \\text{At least one } \\beta_i \\neq 0$</p>
                    </div>
                    <p class="mt-2 text-[10px] italic text-blue-300">Found at the very bottom of R output.</p>
                </div>

                <div class="bg-white/5 p-4 rounded-xl border border-white/10">
                    <h4 class="text-accent font-bold text-xs uppercase mb-2">2. Multiple $R^2$</h4>
                    <p class="text-[11px] text-gray-400 mb-2">Ratio of variation explained by the model ($SSR/SST$).</p>
                    <div class="bg-black/40 p-2 rounded text-center">
                        $$R^2 = \\frac{SSR}{SST}$$
                    </div>
                    <p class="mt-2 text-[10px] text-orange-300">Note: $R^2$ always increases when adding variables (Overfitting). Use <strong>Adjusted $R^2$</strong> for better modelling practice.</p>
                </div>
            </div>
        </div>
    `
},
'mlr-prediction': {
    title: 'Prediction & Coefficient Interpretation',
    html: `
        <div class="space-y-6">
            <section class="bg-white/5 p-5 rounded-xl border border-white/10">
                <h4 class="text-accent font-bold mb-3">Interpreting Estimates</h4>
                <p class="text-sm text-gray-300">Coefficients represent the effect on $Y$ of a <strong>one-unit increase</strong> in $X_i$ while holding all other variables constant.</p>
            </section>

            <section class="bg-white/5 p-5 rounded-xl border border-white/10">
                <h4 class="text-accent font-bold mb-3">Prediction Example (Strike Data)</h4>
                <p class="text-xs text-gray-400 mb-4">Calculate $Y$ for: Unempl=7.8, Infl=5, LaborParl=45, UnionCent=0.75</p>
                <div class="bg-black/40 p-4 rounded font-mono text-xs overflow-x-auto">
                    $Y = 312.8 + 17.5(7.8) + 19.4(5) - 0.14(45) - 400.57(0.75)$
                    <br><span class="text-accent">Predicted $Y \\approx 240$</span>
                </div>
                <div class="mt-4 bg-black/50 p-3 rounded text-xs font-mono">
                    <p class="text-blue-400"># In R:</p>
                    <p>predict(modelAll, list(Unempl=7.8, Inflation=5, ...))</p>
                </div>
            </section>

            <section class="bg-white/5 p-5 rounded-xl border border-white/10">
                <h4 class="text-accent font-bold mb-3 text-sm">Standardized Coefficients</h4>
                <p class="text-xs text-gray-300">Because variables have different units, you cannot compare raw "Estimates" to determine importance. Use <strong>scale()</strong> in R to compare the magnitude of influence.</p>
                <div class="bg-black/40 p-2 mt-2 rounded font-mono text-[10px] text-center">
                    lm(scale(Y) ~ scale(X1) + scale(X2), ...)
                </div>
            </section>
        </div>
    `
},
'mlr-ex2-analysis': {
    title: 'Strike Severity: Final Results Analysis',
    html: `
        <div class="space-y-6">
            <div class="bg-black/60 p-5 rounded-xl border border-white/10 font-mono text-[11px] overflow-x-auto">
                <p class="text-white/60">F-statistic: 16.9 on 4 and 620 DF, p-value: <span class="text-accent">3.65e-13</span></p>
                <p class="text-white/60">Multiple R-squared: <span class="text-accent">0.09833</span>, Adjusted R-squared: 0.09252</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                    <h5 class="text-red-300 font-bold text-xs uppercase">Overall Model Quality</h5>
                    <p class="text-xs mt-1 text-gray-300">The F-statistic (16.9, p < 0.05) is highly significant. We <strong>Reject $H_0$</strong>. At least one variable is significant.</p>
                </div>
                <div class="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                    <h5 class="text-blue-300 font-bold text-xs uppercase">Individual Significance (t-tests)</h5>
                    <p class="text-xs mt-1 text-gray-300">Unemployment, Inflation, and Union Centralisation are significant. <strong>LaborParl (p=0.93)</strong> has no significant effect.</p>
                </div>
            </div>

            <div class="bg-white/5 p-4 rounded-lg border border-white/10">
                <h4 class="text-xs font-bold text-accent uppercase mb-2">Individual Variable Test</h4>
                <p class="text-[11px] text-gray-400">Tested using a t-test with $n - p - 1$ degrees of freedom ($625 - 4 - 1 = 620$).</p>
                <div class="text-xs mt-2 italic">
                    $H_0: \\beta_i = 0$ vs $H_1: \\beta_i \\neq 0$
                </div>
            </div>
        </div>
    `
},
'mlr-quality': {
            title: 'Evaluating Model Quality',
            html: `
                <div class="space-y-10">
                    
                    <!-- 1. THE F-TEST (Slide 4) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 4</span>
                            <h3 class="text-xl font-bold text-accent">1. Overall Significance: The F-Test</h3>
                        </div>
                        
                        <p class="text-sm text-gray-300 mb-6 leading-relaxed">
                            The F-test evaluates whether the model as a whole is useful. It tests if <strong>none</strong> of the independent variables have any influence.
                        </p>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="bg-black/40 p-5 rounded-lg border border-white/5">
                                <h4 class="text-xs font-bold text-accent uppercase mb-3">Hypotheses</h4>
                                <ul class="space-y-4 text-sm font-mono">
                                    <li>$H_0: \\beta_1 = \\beta_2 = \\dots = \\beta_p = 0$</li>
                                    <li>$H_1: \\text{At least one } \\beta_i \\neq 0$</li>
                                </ul>
                            </div>
                            <div class="flex flex-col justify-center">
                                <p class="text-xs text-gray-400">
                                    If the p-value of the F-test is <strong>< 0.05</strong>, we reject $H_0$ and conclude that at least one predictor in the model is significantly different from zero.
                                </p>
                                <div class="mt-4 p-2 bg-blue-500/10 border border-blue-500/30 rounded text-[10px] text-blue-200">
                                    Found at the bottom of R summary output.
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- 2. R-SQUARED (Slide 7 & 9) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 7 & 9</span>
                            <h3 class="text-xl font-bold text-accent">2. Determination Coefficient ($R^2$)</h3>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div class="space-y-4">
                                <p class="text-sm text-gray-300">
                                    $R^2$ measures the ability of the model to explain variation in the outcome $Y$. It represents the ratio of <strong>Explained Variation (SSR)</strong> to <strong>Total Variation (SST)</strong>.
                                </p>
                                <div class="bg-black/40 p-4 rounded-lg text-center">
                                    $$R^2 = \\frac{SSR}{SST}$$
                                    <p class="text-[10px] opacity-50 mt-2">Value lies between 0 and 1.</p>
                                </div>
                            </div>

                            <div class="bg-orange-500/5 p-5 rounded-xl border border-orange-500/20">
                                <h4 class="text-orange-300 font-bold text-xs uppercase mb-3">The Problem with $R^2$ (Overfitting)</h4>
                                <p class="text-xs text-gray-400 leading-relaxed">
                                    As a regression model grows (adding more variables), $R^2$ <strong>can only ever go up</strong>. This can lead to <strong>overfitting</strong>—where the model fits the sample perfectly but fails to generalize.
                                </p>
                                <div class="mt-4 p-3 bg-black/40 rounded-lg">
                                    <h5 class="text-accent font-bold text-[10px] uppercase">Solution: Adjusted $R^2$</h5>
                                    <p class="text-[11px] text-gray-300 mt-1">
                                        The <strong>Adjusted $R^2$</strong> takes into account the number of independent variables used. It penalizes the addition of unnecessary variables.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- 3. DEGREES OF FREEDOM (Slide 14) -->
                    <div class="bg-white/5 p-4 rounded-lg border border-white/10 text-center">
                        <p class="text-xs text-gray-400 italic">
                            Individual significance for each variable is tested via a <strong>t-test</strong> with degrees of freedom:
                            <span class="text-white font-mono ml-2">df = n - p - 1</span>
                        </p>
                    </div>
                </div>
            `
        },
        'mlr-prediction': {
            title: 'Prediction & Direction of Effects',
            html: `
                <div class="space-y-8">
                    <!-- DIRECTION OF EFFECTS (Slide 10) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 10</span>
                            <h3 class="text-xl font-bold text-accent">Direction of Effects</h3>
                        </div>
                        <p class="text-sm text-gray-300 mb-4">The <strong>sign</strong> ($+$ or $-$) of the regression coefficient tells us the nature of the relationship:</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                                <h4 class="text-green-400 font-bold text-xs uppercase mb-2">Positive Relationship ($+$)</h4>
                                <p class="text-[11px] text-gray-300">As $X$ increases, $Y$ increases. In our example:</p>
                                <ul class="text-[10px] mt-2 list-disc list-inside opacity-70">
                                    <li>Unemployment ($X_1$)</li>
                                    <li>Inflation ($X_2$)</li>
                                </ul>
                            </div>
                            <div class="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                                <h4 class="text-red-400 font-bold text-xs uppercase mb-2">Inverse Relationship ($-$)</h4>
                                <p class="text-[11px] text-gray-300">As $X$ increases, $Y$ decreases. In our example:</p>
                                <ul class="text-[10px] mt-2 list-disc list-inside opacity-70">
                                    <li>Labor Parliament Rep ($X_3$)</li>
                                    <li>Union Centralisation ($X_4$)</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <!-- PREDICTIVE PURPOSES (Slide 11) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 11</span>
                            <h3 class="text-xl font-bold text-accent">Predictive Modeling</h3>
                        </div>
                        <p class="text-sm text-gray-300 mb-4">We can predict the value of $Y$ by substituting hypothetical values for $X_i$ into the equation.</p>
                        
                        <div class="bg-black/40 p-5 rounded-lg border border-white/5">
                            <h4 class="text-xs font-bold text-accent uppercase mb-3">Example: A hypothetical country</h4>
                            <div class="text-[11px] text-gray-400 space-y-1 mb-4">
                                <p>• Unemployment: 7.8% | Inflation: 5%</p>
                                <p>• Labor Seats: 45% | Union Centralisation: 0.75</p>
                            </div>
                            <div class="bg-white/5 p-3 rounded font-mono text-xs">
                                $Y = 312.8 + 17.5(7.8) + 19.4(5) - 0.14(45) - 400.57(0.75)$
                                <br><span class="text-accent text-sm">Predicted Strike Severity (Y) $\\approx 240$</span>
                            </div>
                        </div>
                    </section>
                </div>
            `
        },

        'mlr-importance': {
            title: 'Magnitude vs. Importance of Effects',
            html: `
                <div class="space-y-8">
                    <!-- UNSTANDARDIZED VS STANDARDIZED (Slide 12-13) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 12</span>
                            <h3 class="text-xl font-bold text-accent">Unstandardized vs. Standardized</h3>
                        </div>
                        
                        <div class="bg-red-500/10 p-4 rounded-lg border border-red-500/30 mb-6">
                            <p class="text-sm font-bold text-red-200">The "Large Estimate" Trap:</p>
                            <p class="text-xs text-gray-300 mt-1">
                                In our equation, the estimate for $X_4$ is <strong class="text-white">400.57</strong>. While this is the largest number, it <strong>does not</strong> automatically mean $X_4$ is the most important variable.
                            </p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-3">
                                <h4 class="text-xs font-bold uppercase text-white/40">Unstandardized Output</h4>
                                <p class="text-xs text-gray-400">Coefficients are measured in their original units (e.g., dollars, percentages, days). You cannot compare them directly.</p>
                            </div>
                            <div class="space-y-3">
                                <h4 class="text-xs font-bold uppercase text-white/40">Standardized Output</h4>
                                <p class="text-xs text-gray-400">Removes the units (scales the data). This allows us to <strong>order independent variables</strong> from most influential to least influential.</p>
                            </div>
                        </div>

                        <!-- Ranking Table -->
                        <div class="mt-8 overflow-x-auto">
                            <table class="w-full text-left text-[10px] bg-black/40 rounded-lg">
                                <thead class="bg-accent text-black uppercase font-bold">
                                    <tr><th class="p-2">Rank</th><th class="p-2">Variable</th><th class="p-2">Standardized Beta</th><th class="p-2">Importance</th></tr>
                                </thead>
                                <tbody class="text-gray-300">
                                    <tr class="border-b border-white/5"><td class="p-2">1</td><td class="p-2">UnionCent ($X_4$)</td><td class="p-2">-0.2231</td><td class="p-2">High</td></tr>
                                    <tr class="border-b border-white/5"><td class="p-2">2</td><td class="p-2">Inflation ($X_2$)</td><td class="p-2">0.1602</td><td class="p-2">Medium-High</td></tr>
                                    <tr class="border-b border-white/5"><td class="p-2">3</td><td class="p-2">Unempl ($X_1$)</td><td class="p-2">0.0946</td><td class="p-2">Medium</td></tr>
                                    <tr><td class="p-2">4</td><td class="p-2">LaborParl ($X_3$)</td><td class="p-2">-0.0033</td><td class="p-2">Negligible</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            `
        },

        'mlr-significance': {
            title: 'Individual Variable Significance',
            html: `
                <div class="space-y-8">
                    <!-- T-TEST LOGIC (Slide 14) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 14</span>
                            <h3 class="text-xl font-bold text-accent">Testing the Contribution of $X_i$</h3>
                        </div>
                        <p class="text-sm text-gray-300 mb-6">Once the overall model is deemed significant (via F-test), we test each variable individually using a <strong>t-test</strong>.</p>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div class="bg-black/40 p-4 rounded-lg border border-white/5">
                                <h4 class="text-xs font-bold text-accent uppercase mb-2">Hypothesis</h4>
                                <ul class="text-sm font-mono space-y-1">
                                    <li>$H_0: \\beta_i = 0$ <span class="text-[10px] opacity-50 text-white">(No Effect)</span></li>
                                    <li>$H_1: \\beta_i \\neq 0$ <span class="text-[10px] opacity-50 text-white">(Significant Effect)</span></li>
                                </ul>
                            </div>
                            <div class="bg-black/40 p-4 rounded-lg border border-white/5 text-center flex flex-col justify-center">
                                <h4 class="text-xs font-bold text-accent uppercase mb-2">Degrees of Freedom</h4>
                                <p class="text-lg font-mono">$df = n - p - 1$</p>
                                <p class="text-[10px] text-gray-400 mt-1">($n$: Sample Size | $p$: Predictors)</p>
                            </div>
                        </div>

                        <div class="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                            <p class="text-xs text-gray-300">
                                In R, we check the <strong class="text-white">Pr(>|t|)</strong> column. If this value is < 0.05, we reject $H_0$ and conclude the variable makes a significant contribution to the model.
                            </p>
                        </div>
                    </section>
                </div>
            `
        },

        'mlr-ex2-conclusion': {
            title: 'Ex 2: Final Summary (Strike Severity)',
            html: `
                <div class="space-y-6">
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 15</span>
                            <h3 class="text-xl font-bold text-accent">Final Conclusions</h3>
                        </div>

                        <div class="bg-black/40 p-5 rounded-lg border border-white/5 mb-6">
                            <h4 class="text-xs font-bold text-white uppercase mb-3">Model Parameters</h4>
                            <div class="flex justify-around text-center">
                                <div><p class="text-[10px] opacity-50">Sample ($n$)</p><p class="text-lg font-bold">625</p></div>
                                <div><p class="text-[10px] opacity-50">Predictors ($p$)</p><p class="text-lg font-bold">4</p></div>
                                <div><p class="text-[10px] opacity-50">DF</p><p class="text-lg font-bold text-accent">620</p></div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                                <h4 class="text-green-400 font-bold text-xs uppercase mb-2">Reject $H_0$ (Significant)</h4>
                                <p class="text-[11px] text-gray-300 italic">"Significantly different from zero"</p>
                                <ul class="text-[10px] mt-2 space-y-1 text-white">
                                    <li>1. Unemployment ($X_1$)</li>
                                    <li>2. Inflation ($X_2$)</li>
                                    <li>4. Union Centralisation ($X_4$)</li>
                                </ul>
                            </div>
                            <div class="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                                <h4 class="text-red-400 font-bold text-xs uppercase mb-2">Fail to Reject $H_0$</h4>
                                <p class="text-[11px] text-gray-300 italic">"No significant effect"</p>
                                <ul class="text-[10px] mt-2 space-y-1 text-white">
                                    <li>3. Parliamentary Rep ($X_3$)</li>
                                </ul>
                            </div>
                        </div>

                        <div class="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                            <p class="text-xs text-center text-gray-400">
                                Unemployment, inflation, and union centralisation are all highly significant (even at the 0.5% level).
                            </p>
                        </div>
                    </section>
                </div>
            `
        },
       'mlr-stepwise-r': {
            title: 'Stepwise Regression in R',
            html: `
                <div class="space-y-8">
                    <!-- THE STEP FUNCTION (Slide 3-4) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">R SYNTAX</span>
                            <h3 class="text-xl font-bold text-accent">Using the <code>step()</code> Function</h3>
                        </div>
                        
                        <p class="text-sm text-gray-300 mb-4 leading-relaxed">
                            Backward elimination starts with all variables and removes the least significant ones one by one based on either the <strong>AIC</strong> or an <strong>F-test</strong>.
                        </p>
                        
                        <div class="bg-black/50 p-4 rounded-lg font-mono text-[11px] border border-accent/20 space-y-2">
                            <p class="text-accent"># Method 1: AIC Elimination (Default)</p>
                            <p class="text-white">step(modelAll, direction="backward")</p>
                            <br>
                            <p class="text-accent"># Method 2: F-test Elimination</p>
                            <p class="text-white">step(modelAll, direction="backward", test="F")</p>
                        </div>
                    </section>

                    <!-- EXCLUDING VARIABLES (Slide 5) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <h4 class="text-accent font-bold mb-4">Updating the Model</h4>
                        <p class="text-sm text-gray-300 mb-4">
                            Once the stepwise process identifies a non-significant variable (like <strong>LaborParl</strong>), we update our model object:
                        </p>
                        
                        <div class="bg-black/60 p-5 rounded-xl border border-white/10 font-mono text-[11px] leading-tight overflow-x-auto">
                            <p class="text-cyan-400">> modelStepwise = update(modelAll, . ~ . - LaborParl)</p>
                            <p class="text-cyan-400">> summary(modelStepwise)</p>
                            <br>
                            <p class="text-white/40">Call:</p>
                            <p class="text-white">lm(formula = Volume ~ Unempl + Inflation + UnionCent, data = strikes_all)</p>
                            <br>
                            <p class="text-white/40">Coefficients:</p>
                            <table class="w-full text-left mt-2">
                                <thead class="text-white/60 border-b border-white/10">
                                    <tr>
                                        <th class="py-1">Variable</th>
                                        <th class="py-1">Estimate</th>
                                        <th class="py-1">t value</th>
                                        <th class="py-1 text-right">Pr(>|t|)</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-300">
                                    <tr><td>(Intercept)</td><td>306.593</td><td>5.627</td><td class="text-right text-accent">2.78e-08 ***</td></tr>
                                    <tr><td>Unempl</td><td>17.532</td><td>2.389</td><td class="text-right text-accent">0.0172 *</td></tr>
                                    <tr><td>Inflation</td><td>19.420</td><td>4.134</td><td class="text-right text-accent">4.05e-05 ***</td></tr>
                                    <tr><td>UnionCent</td><td>-399.794</td><td>-5.695</td><td class="text-right text-accent">1.91e-08 ***</td></tr>
                                </tbody>
                            </table>
                            <br>
                            <div class="pt-2 border-t border-white/5 space-y-1 text-white/60">
                                <p>Multiple R-squared: <span class="text-white">0.09832</span></p>
                                <p>Adjusted R-squared: <span class="text-white">0.09397</span></p>
                                <p>F-statistic: <span class="text-white">22.57 on 3 and 621 DF</span></p>
                            </div>
                        </div>
                    </section>

                    <div class="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                        <p class="text-xs text-gray-300">
                            <strong>Note:</strong> After removing <em>LaborParl</em>, the Adjusted $R^2$ actually <strong>increased</strong> (from 0.0925 to 0.09397), indicating a more efficient model with fewer unnecessary predictors.
                        </p>
                    </div>
                </div>
            `
        },'mlr-ci': {
            title: 'Confidence Intervals & Predictions',
            html: `
                <div class="space-y-8">
                    <!-- THEORY SECTION -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">THEORY</span>
                            <h3 class="text-xl font-bold text-accent">Defining the Range</h3>
                        </div>
                        <p class="text-sm text-gray-300 leading-relaxed">
                            Confidence intervals give us a range of <strong>plausible values</strong> for the unknown population parameters ($\\beta_i$) in our model.
                        </p>
                    </section>

                    <!-- R CONSOLE: CONFINT -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <h4 class="text-accent font-bold mb-4">1. Coefficients Confidence Intervals</h4>
                        <p class="text-xs text-gray-400 mb-4">To get the intervals for the coefficients in R:</p>
                        
                        <div class="bg-black/60 p-5 rounded-xl border border-white/10 font-mono text-[11px] leading-tight overflow-x-auto">
                            <p class="text-cyan-400">> confint(modelStepwise, level=0.95)</p>
                            <table class="w-full text-left mt-4 border-t border-white/5">
                                <thead>
                                    <tr class="text-white/40">
                                        <th class="py-2"></th>
                                        <th class="py-2">2.5 %</th>
                                        <th class="py-2">97.5 %</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-300">
                                    <tr class="border-b border-white/5">
                                        <td class="py-2 text-white/60">(Intercept)</td>
                                        <td>199.58819</td>
                                        <td>413.59776</td>
                                    </tr>
                                    <tr class="border-b border-white/5">
                                        <td class="py-2 text-white/60">Unempl</td>
                                        <td>3.11986</td>
                                        <td>31.94406</td>
                                    </tr>
                                    <tr class="border-b border-white/5">
                                        <td class="py-2 text-white/60">Inflation</td>
                                        <td>10.19545</td>
                                        <td>28.64388</td>
                                    </tr>
                                    <tr>
                                        <td class="py-2 text-white/60">UnionCent</td>
                                        <td>-537.66195</td>
                                        <td>-261.92611</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <!-- R CONSOLE: PREDICT -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <h4 class="text-accent font-bold mb-4">2. Making Predictions</h4>
                        <p class="text-xs text-gray-400 mb-4">Using the updated model to predict $Y$ with the same hypothetical values as before:</p>
                        
                        <div class="bg-black/60 p-5 rounded-xl border border-white/10 font-mono text-[11px] leading-tight">
                            <p class="text-cyan-400">> predict(modelStepwise, list(Unempl=7.8, Inflation=5, UnionCent=0.75))</p>
                            <div class="mt-4 flex gap-8">
                                <div>
                                    <p class="text-white/40 italic underline mb-1">Observation</p>
                                    <p class="text-white">1</p>
                                </div>
                                <div>
                                    <p class="text-accent italic underline mb-1">Predicted Value</p>
                                    <p class="text-accent text-lg font-bold">240.5951</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div class="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                        <p class="text-xs text-gray-300">
                            <strong>Interpretation Tip:</strong> Note that for all significant variables (Unempl, Inflation, UnionCent), the 95% confidence interval <strong>does not include zero</strong>. This is consistent with our p-values being < 0.05.
                        </p>
                    </div>
                </div>
            `
        },
       'mlr-categorical': {
            title: 'Categorical & Dummy Variables',
            html: `
                <div class="space-y-10">
                    <!-- 1. THE CHALLENGE (Slide 7) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">THEORY</span>
                            <h3 class="text-xl font-bold text-accent">Why "Special Care" is Needed</h3>
                        </div>
                        <p class="text-sm text-gray-300 leading-relaxed mb-6">
                            Regression equations are mathematical functions ($Y = \\beta X$). We cannot perform math on words like "Red" or "High Risk." To include these, we must <strong>recode</strong> them into numbers.
                        </p>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div class="bg-black/30 p-4 rounded-lg border border-white/5 text-center">
                                <p class="text-accent font-bold text-xs uppercase mb-1">Company Growth</p>
                                <p class="text-[10px] text-gray-400">Start, Middle, End</p>
                            </div>
                            <div class="bg-black/30 p-4 rounded-lg border border-white/5 text-center">
                                <p class="text-accent font-bold text-xs uppercase mb-1">Portfolio Risk</p>
                                <p class="text-[10px] text-gray-400">No Risk, Average, High</p>
                            </div>
                            <div class="bg-black/30 p-4 rounded-lg border border-white/5 text-center">
                                <p class="text-accent font-bold text-xs uppercase mb-1">Product Colour</p>
                                <p class="text-[10px] text-gray-400">Red, Blue, Yellow</p>
                            </div>
                        </div>
                    </section>

                    <!-- 2. THE REFERENCE CATEGORY (Slide 7) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <h4 class="text-accent font-bold mb-4">The Reference Category</h4>
                        <div class="space-y-4 text-sm text-gray-300">
                            <p>Recoding requires choosing one level to be the <strong>Reference Category</strong> (the baseline).</p>
                            <div class="p-4 bg-accent/5 border-l-4 border-accent rounded">
                                <p class="italic">"All other levels will be <strong>compared to</strong> this level in the regression output."</p>
                            </div>
                            <p class="text-xs text-gray-400">
                                <strong>Note:</strong> Technically, it makes no difference which level is chosen as the reference, but practically, it should be a baseline that makes sense for comparison (e.g., "No Risk" or "Placebo").
                            </p>
                        </div>
                    </section>

                    <!-- 3. THE DUMMY CODING PROCESS (Slide 8) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <h4 class="text-accent font-bold mb-2">The $L - 1$ Rule</h4>
                        <p class="text-xs text-gray-400 mb-6">
                            If a categorical variable has $L$ levels, you must create <strong>$L - 1$</strong> binary (indicator) variables.
                        </p>

                        <!-- Visual Dummy Coding Example -->
                        <div class="bg-black/40 p-5 rounded-xl border border-white/5">
                            <h5 class="text-[10px] font-bold text-white/40 uppercase mb-4 text-center">Recoding Example: Product Colour ($L=3$)</h5>
                            <div class="overflow-x-auto">
                                <table class="w-full text-center text-[11px] border-collapse">
                                    <thead>
                                        <tr class="text-white border-b border-white/10">
                                            <th class="py-2 px-4 text-left">Original Category</th>
                                            <th class="py-2 px-4 bg-blue-500/10 text-blue-300 font-mono">Ind_Blue</th>
                                            <th class="py-2 px-4 bg-yellow-500/10 text-yellow-300 font-mono">Ind_Yellow</th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-gray-400">
                                        <tr class="border-b border-white/5 italic">
                                            <td class="py-3 px-4 text-left font-bold text-white">Red (Reference)</td>
                                            <td class="py-3 px-4">0</td>
                                            <td class="py-3 px-4">0</td>
                                        </tr>
                                        <tr class="border-b border-white/5">
                                            <td class="py-3 px-4 text-left font-bold text-white">Blue</td>
                                            <td class="py-3 px-4 font-bold text-blue-400">1</td>
                                            <td class="py-3 px-4">0</td>
                                        </tr>
                                        <tr>
                                            <td class="py-3 px-4 text-left font-bold text-white">Yellow</td>
                                            <td class="py-3 px-4">0</td>
                                            <td class="py-3 px-4 font-bold text-yellow-400">1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-3 bg-green-500/10 rounded border border-green-500/30">
                                <p class="text-xs font-bold text-green-300 mb-1">Value = 1</p>
                                <p class="text-[10px] text-gray-400">The observation belongs to that specific indicator level.</p>
                            </div>
                            <div class="p-3 bg-red-500/10 rounded border border-red-500/30">
                                <p class="text-xs font-bold text-red-300 mb-1">Value = 0</p>
                                <p class="text-[10px] text-gray-400">The observation belongs to the Reference Category (or a different indicator).</p>
                            </div>
                        </div>
                    </section>
                </div>
            `
        },
'mlr-ex2-cat': {
            title: 'Ex 2: Categorical Analysis (Dummy Coding)',
            html: `
                <div class="space-y-10">
                    <!-- 1. RESEARCH CONTEXT (Slide 9) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">CONTEXT</span>
                            <h3 class="text-xl font-bold text-accent">Vague Theory & Model Uncertainty</h3>
                        </div>
                        <p class="text-sm text-gray-300 leading-relaxed mb-4">
                            Taken from Western (1996), this study attempts to explain <strong>Strike Severity</strong> (days lost per 1000 wage earners) using four numeric predictors and one categorical factor:
                        </p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px] text-gray-400">
                            <ul class="space-y-1">
                                <li><strong class="text-white">X1:</strong> Unemployment levels</li>
                                <li><strong class="text-white">X2:</strong> Inflation levels</li>
                                <li><strong class="text-white">X3:</strong> Social Democratic/Labour representation</li>
                            </ul>
                            <ul class="space-y-1">
                                <li><strong class="text-white">X4:</strong> Union Centralisation</li>
                                <li><strong class="text-white text-accent">X5 (Categorical):</strong> Year (Decade: 50s, 60s, 70s, 80s)</li>
                            </ul>
                        </div>
                    </section>

                    <!-- 2. VISUAL RECODING GRID (Slide 10) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <h4 class="text-accent font-bold mb-4">Visualizing the Indicator (Dummy) Mapping</h4>
                        <p class="text-xs text-gray-400 mb-6">Observe how the single "Year" column is transformed into three binary columns. The <strong>50s</strong> level is the reference.</p>
                        
                        <div class="overflow-x-auto">
                            <table class="w-full text-center text-[10px] border-collapse bg-black/20 rounded-lg">
                                <thead class="bg-white/5 text-white/60">
                                    <tr>
                                        <th class="p-2 border-b border-white/10">Year (L)</th>
                                        <th class="p-2 border-b border-white/10">Decade (ID)</th>
                                        <th class="p-2 border-b border-white/10 bg-blue-500/10 text-blue-300">Ind_60s</th>
                                        <th class="p-2 border-b border-white/10 bg-green-500/10 text-green-300">Ind_70s</th>
                                        <th class="p-2 border-b border-white/10 bg-red-500/10 text-red-300">Ind_80s</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-white/5 opacity-60">
                                        <td class="p-2 font-bold text-white">50s</td><td class="p-2 italic">Ref</td>
                                        <td class="p-2">0</td><td class="p-2">0</td><td class="p-2">0</td>
                                    </tr>
                                    <tr class="border-b border-white/5 bg-blue-500/5">
                                        <td class="p-2 font-bold text-white">60s</td><td class="p-2">2</td>
                                        <td class="p-2 font-bold text-blue-400">1</td><td class="p-2">0</td><td class="p-2">0</td>
                                    </tr>
                                    <tr class="border-b border-white/5 bg-green-500/5">
                                        <td class="p-2 font-bold text-white">70s</td><td class="p-2">3</td>
                                        <td class="p-2">0</td><td class="p-2 font-bold text-green-400">1</td><td class="p-2">0</td>
                                    </tr>
                                    <tr class="bg-red-500/5">
                                        <td class="p-2 font-bold text-white">80s</td><td class="p-2">4</td>
                                        <td class="p-2">0</td><td class="p-2">0</td><td class="p-2 font-bold text-red-400">1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <!-- 3. R IMPLEMENTATION (Slide 11-12) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <h4 class="text-accent font-bold mb-4">R Implementation</h4>
                        <div class="bg-black/60 p-4 rounded-lg font-mono text-[11px] space-y-3 mb-6">
                            <p class="text-cyan-400"># 1. Create dummy matrix (L-1 categories)</p>
                            <p class="text-white">Decade.f = factor(Decade)</p>
                            <p class="text-white">dummies = model.matrix(~Decade.f)</p>
                            <br>
                            <p class="text-cyan-400"># 2. Update model including dummies for 60s, 70s, and 80s</p>
                            <p class="text-white">modelCategorical = update(modelAll, . ~ . + dummies[, 2:4])</p>
                        </div>

                        <div class="bg-black/60 p-5 rounded-xl border border-white/10 font-mono text-[11px] overflow-x-auto">
                            <p class="text-white/40 mb-2">Coefficients (Partial Output):</p>
                            <table class="w-full text-left">
                                <thead>
                                    <tr class="text-white border-b border-white/10">
                                        <th class="py-1">Variable</th><th class="py-1">Estimate</th><th class="py-1">Pr(>|t|)</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-300">
                                    <tr><td>(Intercept)</td><td>250.871</td><td>0.0116 *</td></tr>
                                    <tr><td>Unempl</td><td>31.555</td><td>0.0001 ***</td></tr>
                                    <tr class="opacity-40"><td>Decade.f60s</td><td>7.914</td><td>0.8917</td></tr>
                                    <tr class="opacity-40"><td>Decade.f70s</td><td>-65.848</td><td>0.2977</td></tr>
                                    <tr class="text-accent font-bold"><td>Decade.f80s</td><td>-269.488</td><td>0.0004 ***</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <!-- 4. FINAL INTERPRETATION (Slide 13) -->
                    <section class="bg-blue-900/20 p-6 rounded-xl border border-blue-500/30">
                        <h4 class="text-blue-300 font-bold text-sm uppercase mb-4 tracking-widest">Final Verdict: The 80s Effect</h4>
                        <div class="space-y-4 text-sm text-gray-300 leading-relaxed">
                            <p>
                                Of the indicator variables, <strong class="text-white">only the 1980s (Ind_80s) is significant</strong>. Because the coefficient is negative ($-269.488$), we interpret this <strong>relative to the reference category (1950s)</strong>.
                            </p>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="bg-black/40 p-4 rounded-lg border border-white/5">
                                    <p class="text-accent font-bold mb-1">Statistical Finding:</p>
                                    <p class="text-xs italic">"Strike volumes are significantly lower in the 1980s than in the 1950s."</p>
                                </div>
                                <div class="bg-black/40 p-4 rounded-lg border border-white/5">
                                    <p class="text-accent font-bold mb-1">Magnitude Interpretation:</p>
                                    <p class="text-xs">On average, there were <strong>~270 fewer strike days</strong> lost per 1000 workers in the 80s compared to the 50s.</p>
                                </div>
                            </div>

                            <p class="pt-4 border-t border-white/10 text-xs italic">
                                <strong>Model Improvement:</strong> The addition of these categorical indicators increased the explained variation ($R^2$) to <strong>11.9%</strong> and the Adjusted $R^2$ to <strong>10.9%</strong>.
                            </p>
                        </div>
                    </section>
                </div>
            `
        },
'mlr-advanced': {
    title: 'Additional Topics & Diagnostics',
    html: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-white/5 p-4 rounded-lg border border-white/10 shadow-sm">
                <h4 class="text-accent font-bold text-xs uppercase mb-2">Interactions</h4>
                <p class="text-[11px] text-gray-400">Assumes the influence of one independent variable <strong>depends</strong> on the level of another variable.</p>
            </div>
            
            <div class="bg-white/5 p-4 rounded-lg border border-white/10 shadow-sm">
                <h4 class="text-accent font-bold text-xs uppercase mb-2">Outlier Detection</h4>
                <p class="text-[11px] text-gray-400">Identifying observations with high influence using <strong>Cook’s Distance</strong> or Standardised Residuals.</p>
            </div>

            <div class="bg-white/5 p-4 rounded-lg border border-white/10 shadow-sm">
                <h4 class="text-accent font-bold text-xs uppercase mb-2">Multicollinearity</h4>
                <p class="text-[11px] text-gray-400">Occurs when independent variables are <strong>strongly correlated</strong> with each other, making coefficients unstable.</p>
            </div>

            <div class="bg-white/5 p-4 rounded-lg border border-white/10 shadow-sm">
                <h4 class="text-accent font-bold text-xs uppercase mb-2">Linearity</h4>
                <p class="text-[11px] text-gray-400">The basic assumption that the relationship follows a straight line ($Y = \\beta X$).</p>
            </div>
        </div>
    `
},
'anova-intro': {
    title: 'Introduction to ANOVA',
    html: `
        <div class="space-y-10">
            <!-- 1. DEFINITION & STEPS -->
            <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">CONCEPT</span>
                    <h3 class="text-xl font-bold text-accent">Analysis of Variance</h3>
                </div>
                <p class="text-sm text-gray-300 leading-relaxed mb-6">
                    ANOVA is an extension of the t-test used to compare means across <strong>more than 2 groups</strong>. It determines if the variation between group means is larger than the variation within the groups.
                </p>

                <h4 class="text-xs font-bold text-white uppercase tracking-widest mb-4">How to perform ANOVA:</h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-black/30 p-4 rounded-lg border border-white/5 relative">
                        <span class="absolute -top-2 -left-2 w-6 h-6 bg-accent text-black rounded-full flex items-center justify-center font-bold text-xs">1</span>
                        <p class="text-[11px] text-gray-300 mt-2"><strong>Formulate</strong> the statistical hypothesis ($H_0$ and $H_1$).</p>
                    </div>
                    <div class="bg-black/30 p-4 rounded-lg border border-white/5 relative">
                        <span class="absolute -top-2 -left-2 w-6 h-6 bg-accent text-black rounded-full flex items-center justify-center font-bold text-xs">2</span>
                        <p class="text-[11px] text-gray-300 mt-2"><strong>Compute</strong> an F-statistic based on partitioned sum of squares.</p>
                    </div>
                    <div class="bg-black/30 p-4 rounded-lg border border-white/5 relative">
                        <span class="absolute -top-2 -left-2 w-6 h-6 bg-accent text-black rounded-full flex items-center justify-center font-bold text-xs">3</span>
                        <p class="text-[11px] text-gray-300 mt-2"><strong>Compare</strong> with the critical value to generate a conclusion.</p>
                    </div>
                </div>
            </section>

            <!-- 2. SIMPLE WORKED EXAMPLE -->
            <section class="bg-accent/5 p-6 rounded-xl border border-accent/20">
                <h4 class="text-white font-bold mb-4">A Simple Example: Fertilizer Study</h4>
                <p class="text-xs text-gray-400 mb-6">
                    A researcher wants to know if three different brands of fertilizer (A, B, and C) result in different average plant heights.
                </p>

                <div class="space-y-6">
                    <!-- Step 1 in Example -->
                    <div>
                        <p class="text-xs font-bold text-accent uppercase mb-2">Step 1: Hypotheses</p>
                        <div class="bg-black/40 p-4 rounded-lg border border-white/5 font-mono text-xs">
                            <p>$H_0: \\mu_A = \\mu_B = \\mu_C$</p>
                            <p class="text-gray-500 italic mt-1">(All fertilizers have the same effect on growth)</p>
                            <br>
                            <p>$H_1: \\text{At least one mean is different}$</p>
                            <p class="text-gray-500 italic mt-1">(At least one fertilizer brand performs better or worse)</p>
                        </div>
                    </div>

                    <!-- Step 2 & 3 in Example -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p class="text-xs font-bold text-accent uppercase mb-2">Step 2: The Test</p>
                            <p class="text-[11px] text-gray-300 leading-relaxed">
                                We collect height data from 30 plants (10 per brand). We calculate the <strong>F-statistic</strong>. If the "Between Group" variance is high relative to "Within Group" error, the F-value increases.
                            </p>
                        </div>
                        <div>
                            <p class="text-xs font-bold text-accent uppercase mb-2">Step 3: Conclusion</p>
                            <div class="p-3 bg-white/5 rounded border border-white/10">
                                <p class="text-[11px] text-gray-400 italic">
                                    If our p-value is <strong>0.02</strong> (which is < 0.05), we <strong class="text-green-400">Reject $H_0$</strong>. 
                                    We conclude that the fertilizers do NOT have the same effect.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `
},
'anova-partition': {
            title: 'Partitioning Sum of Squares',
            html: `
                <div class="space-y-10">
                    <!-- 1. THE CONCEPT OF EXPLAINED VARIATION (Slide 4) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 4</span>
                            <h3 class="text-xl font-bold text-accent">Variability Attribution</h3>
                        </div>
                        
                        <p class="text-sm text-gray-300 leading-relaxed mb-6">
                            There is a certain amount of variation in the <strong>Dependent Variable (Y)</strong>. We attempt to attribute this variation to one or more <strong>Independent Variables (X)</strong>.
                        </p>

                        <div class="bg-black/40 p-5 rounded-lg border border-white/5">
                            <h4 class="text-xs font-bold text-white uppercase tracking-widest mb-4">When variation is "Significant":</h4>
                            <div class="space-y-4">
                                <div class="flex items-start gap-3">
                                    <div class="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5">1</div>
                                    <p class="text-[11px] text-gray-400">The independent variable has a <strong>significant effect</strong> on the outcome.</p>
                                </div>
                                <div class="flex items-start gap-3">
                                    <div class="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5">2</div>
                                    <p class="text-[11px] text-gray-400">We <strong>Reject $H_0$</strong> (which claimed all means were equal) and establish that at least one group mean differs significantly from the rest.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- 2. THE THREE COMPONENTS (Slide 5) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 5</span>
                            <h3 class="text-xl font-bold text-accent">Decomposing Variability</h3>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <!-- SSTR -->
                            <div class="bg-green-500/5 p-5 rounded-xl border border-green-500/20">
                                <div class="flex justify-between items-start mb-3">
                                    <h4 class="text-green-400 font-bold text-xs uppercase tracking-tighter">SSTR (Treatment)</h4>
                                    <span class="text-[10px] bg-green-500/20 text-green-300 px-2 py-0.5 rounded">Explained</span>
                                </div>
                                <p class="text-[11px] text-gray-400 leading-relaxed">
                                    The portion of total variability that is <strong>explained</strong> by our independent variables (Treatments). It measures the spread between different group means.
                                </p>
                            </div>

                            <!-- SSE -->
                            <div class="bg-red-500/5 p-5 rounded-xl border border-red-500/20">
                                <div class="flex justify-between items-start mb-3">
                                    <h4 class="text-red-400 font-bold text-xs uppercase tracking-tighter">SSE (Error/Residual)</h4>
                                    <span class="text-[10px] bg-red-500/20 text-red-300 px-2 py-0.5 rounded">Unexplained</span>
                                </div>
                                <p class="text-[11px] text-gray-400 leading-relaxed">
                                    The portion of variability <strong>left over</strong> after effects are accounted for. This is "noise" or natural variation within the groups.
                                </p>
                            </div>
                        </div>

                        <!-- THE IDENTITY BOX -->
                        <div class="bg-black/40 p-8 rounded-2xl border border-white/10 text-center relative overflow-hidden">
                            <!-- Decorative background glow -->
                            <div class="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 blur-3xl rounded-full"></div>
                            
                            <h4 class="text-xs font-bold text-white/40 uppercase mb-4">The Fundamental Identity</h4>
                            <div class="text-3xl md:text-4xl font-black tracking-tighter text-white">
                                $$SST = SSTR + SSE$$
                            </div>
                            <p class="text-[10px] text-gray-500 mt-6 uppercase tracking-widest">
                                Total Sum of Squares = Treatment SS + Error SS
                            </p>
                        </div>
                    </section>

                    <!-- 3. VISUAL FLOW -->
                    <div class="max-w-md mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 text-center items-center">
    <!-- Box 1 -->
    <div class="p-2 bg-white/5 rounded-lg border border-white/5 shadow-sm">
        <p class="text-[8px] text-white/30 uppercase tracking-tighter mb-0.5">Total Var</p>
        <p class="text-sm font-mono text-white">100%</p>
    </div>

    <!-- Operator (Desktop) -->
    <div class="hidden md:flex items-center justify-center text-accent text-sm font-bold">=</div>
    <!-- Operator (Mobile) -->
    <div class="md:hidden text-accent text-xs font-bold my-[-4px]">↓</div>

    <!-- Box 2 -->
    <div class="p-2 bg-white/5 rounded-lg border border-white/5 shadow-sm">
        <p class="text-[8px] text-white/30 uppercase tracking-tighter mb-0.5">Explained</p>
        <p class="text-sm font-mono text-green-400">High SSTR</p>
    </div>

    <!-- Operator (Desktop) -->
    <div class="hidden md:flex items-center justify-center text-accent text-sm font-bold">+</div>
    <!-- Operator (Mobile) -->
    <div class="md:hidden text-accent text-xs font-bold my-[-4px]">↓</div>

    <!-- Box 3 -->
    <div class="p-2 bg-white/5 rounded-lg border border-white/5 shadow-sm">
        <p class="text-[8px] text-white/30 uppercase tracking-tighter mb-0.5">Residual</p>
        <p class="text-sm font-mono text-red-400">Low SSE</p>
    </div>

                </div>

                 <div class="space-y-12">
                    <!-- 1. THE MATHEMATICAL IDENTITY (Slide 6) -->
                    <section class="bg-white/5 p-8 rounded-xl border border-white/10 shadow-lg">
                        <h4 class="text-xs font-bold text-white/40 uppercase tracking-widest mb-10 text-center">Mathematical Identity</h4>

                        <div class="flex flex-col items-center justify-center space-y-10">
                            <!-- Top Identity with Braces -->
                            <div class="text-xl md:text-3xl text-center font-bold">
                                $$\\underbrace{\\color{#ef4444}{SST}}_{\\text{Total SS}} = \\underbrace{\\color{#3b82f6}{SSTR}}_{\\text{Between Treatment SS}} + \\underbrace{\\color{#22c55e}{SSE}}_{\\text{Within Treatment SS}}$$
                            </div>

                            <!-- Full Summation Formulas -->
                            <div class="bg-black/20 p-8 rounded-2xl border border-white/5 overflow-x-auto w-full text-center">
                                <div class="text-lg md:text-xl lg:text-3xl inline-block whitespace-nowrap">
                                    $$\\color{#ef4444}{\\sum_{j=1}^{t} \\sum_{i=1}^{n_j} (Y_{ij} - \\bar{Y}_{..})^2} = \\color{#3b82f6}{\\sum_{j=1}^{t} n_j (\\bar{Y}_j - \\bar{Y}_{..})^2} + \\color{#22c55e}{\\sum_{j=1}^{t} \\sum_{i=1}^{n_j} (Y_{ij} - \\bar{Y}_j)^2}$$
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- 2. NOTATIONS & DEFINITIONS (Slide 6) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <h4 class="text-accent font-bold mb-6 uppercase text-xs tracking-widest border-b border-white/10 pb-2">Notations</h4>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                            <!-- Left Column: Variable Definitions -->
                            <div class="space-y-4">
                                <div class="flex gap-4 items-start group">
                                    <span class="bg-white/10 px-2 py-1 rounded text-white font-mono text-xs w-12 text-center">$Y_{ij}$</span>
                                    <p class="text-gray-400 leading-tight">The $i^{th}$ observation in the $j^{th}$ group.</p>
                                </div>
                                <div class="flex gap-4 items-start group">
                                    <span class="bg-white/10 px-2 py-1 rounded text-white font-mono text-xs w-12 text-center">$N$</span>
                                    <p class="text-gray-400 leading-tight">The <strong>total number</strong> of observations in the entire dataset.</p>
                                </div>
                                <div class="flex gap-4 items-start group">
                                    <span class="bg-white/10 px-2 py-1 rounded text-white font-mono text-xs w-12 text-center">$n_j$</span>
                                    <p class="text-gray-400 leading-tight">The number of observations within specific group $j$.</p>
                                </div>
                            </div>

                            <!-- Right Column: Mean Definitions -->
                            <div class="space-y-4">
                                <div class="flex gap-4 items-start group">
                                    <span class="bg-accent/20 px-2 py-1 rounded text-accent font-mono text-xs w-12 text-center">$\\bar{Y}_{..}$</span>
                                    <div>
                                        <p class="text-white font-bold text-xs uppercase mb-1">Overall Mean</p>
                                        <p class="text-gray-400 leading-tight">The average of <em>all</em> observations across <em>all</em> groups.</p>
                                    </div>
                                </div>
                                <div class="flex gap-4 items-start group">
                                    <span class="bg-accent/20 px-2 py-1 rounded text-accent font-mono text-xs w-12 text-center">$\\bar{Y}_j$</span>
                                    <div>
                                        <p class="text-white font-bold text-xs uppercase mb-1">Group Mean</p>
                                        <p class="text-gray-400 leading-tight">The mean of observations specifically in the $j^{th}$ group.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Technical Concept Note -->
                    <div class="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg text-center">
                        <p class="text-xs text-blue-200">
                            <strong>Note:</strong> $t$ represents the number of groups (treatments). The identity proves that the total variation from the grand mean can be split into <strong>Treatment effect</strong> and <strong>Random error</strong>.
                        </p>
                    </div>
                </div>

<!-- VISUAL PARTITIONING DIAGRAM (Slide 7 - Expanded Axis Version) -->
<section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
    <h4 class="text-center text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Visual Decomposition of Variance</h4>
    
    <div class="flex flex-col items-center">
        <!-- Expanded SVG Graph -->
        <div class="relative w-full max-w-2xl bg-white/5 p-4 rounded-lg">
            <svg viewBox="0 -20 500 300" class="w-full h-auto overflow-visible">
                <!-- Grid Lines (Horizontal Background) -->
                <line x1="60" y1="240" x2="400" y2="240" stroke="white" opacity="0.05" stroke-width="0.5" />
                <line x1="60" y1="180" x2="400" y2="180" stroke="white" opacity="0.05" stroke-width="0.5" />
                <line x1="60" y1="120" x2="400" y2="120" stroke="white" opacity="0.05" stroke-width="0.5" />
                <line x1="60" y1="60" x2="400" y2="60" stroke="white" opacity="0.05" stroke-width="0.5" />
                <line x1="60" y1="0" x2="400" y2="0" stroke="white" opacity="0.05" stroke-width="0.5" />
                
                <!-- Grand Mean Line (Y..) -->
                <line x1="60" y1="135" x2="400" y2="135" stroke="white" stroke-dasharray="6" stroke-width="2" opacity="0.8" />
                <text x="55" y="139" fill="white" font-size="12" text-anchor="end" font-weight="black">Ȳ..</text>

                <!-- Axes -->
                <line x1="60" y1="260" x2="420" y2="260" stroke="white" stroke-width="1.5" /> <!-- X axis -->
                <line x1="60" y1="260" x2="60" y2="-10" stroke="white" stroke-width="1.5" /> <!-- Y axis -->
                
                <!-- Axis Tick Labels -->
                <g font-size="10" fill="white" opacity="0.5" text-anchor="end">
                    <text x="55" y="263">0</text>
                    <text x="55" y="140">10</text>
                    <text x="55" y="15">20</text>
                </g>

                <!-- X-Axis Labels -->
                <text x="110" y="280" fill="white" font-size="11" text-anchor="middle" font-weight="bold">A</text>
                <text x="230" y="280" fill="white" font-size="11" text-anchor="middle" font-weight="bold">B</text>
                <text x="350" y="280" fill="white" font-size="11" text-anchor="middle" font-weight="bold">C</text>
                <text x="230" y="305" fill="white" font-size="12" text-anchor="middle" font-weight="black" opacity="0.7">Treatment</text>
                
                <!-- Y-Axis Label -->
                <text x="20" y="125" fill="white" font-size="12" text-anchor="middle" font-weight="black" transform="rotate(-90, 20, 125)">y</text>

                <!-- GROUP A (Red Circles) -->
                <circle cx="110" cy="245" r="4.5" fill="#ef4444" />
                <circle cx="110" cy="235" r="4.5" fill="#ef4444" />
                <circle cx="110" cy="200" r="4.5" fill="#ef4444" />
                <!-- Mean Marker (X) for A -->
                <g stroke="#ef4444" stroke-width="2.5">
                    <line x1="103" y1="220" x2="117" y2="234" />
                    <line x1="117" y1="220" x2="103" y2="234" />
                </g>
                <text x="125" y="232" fill="#ef4444" font-size="12" font-weight="black">Ȳ₁</text>

                <!-- GROUP B (Green Triangles) -->
                <path d="M 230 10 L 238 24 L 222 24 Z" fill="#22c55e" />
                <path d="M 230 50 L 238 64 L 222 64 Z" fill="#22c55e" />
                <path d="M 230 85 L 238 99 L 222 99 Z" fill="#22c55e" />
                <!-- Mean Marker (X) for B -->
                <g stroke="#22c55e" stroke-width="2.5">
                    <line x1="223" y1="35" x2="237" y2="49" />
                    <line x1="237" y1="35" x2="223" y2="49" />
                </g>
                <text x="245" y="47" fill="#22c55e" font-size="12" font-weight="black">Ȳ₂</text>

                <!-- GROUP C (Blue Squares) -->
                <rect x="345" y="150" width="10" height="10" fill="#3b82f6" />
                <rect x="345" y="180" width="10" height="10" fill="#3b82f6" />
                <rect x="345" y="110" width="10" height="10" fill="#3b82f6" />
                <rect x="345" y="80" width="10" height="10" fill="#3b82f6" />
                <!-- Mean Marker (X) for C -->
                <g stroke="#3b82f6" stroke-width="2.5">
                    <line x1="343" y1="130" x2="357" y2="144" />
                    <line x1="357" y1="130" x2="343" y2="144" />
                </g>
                <text x="365" y="142" fill="#3b82f6" font-size="12" font-weight="black">Ȳ₃</text>

                <!-- LEGEND (Moved to the far right for visibility) -->
                <g transform="translate(425, 50)">
                    <rect x="-5" y="-20" width="75" height="90" fill="black" fill-opacity="0.3" rx="5" />
                    <text x="32" y="0" fill="white" font-size="11" font-weight="black" text-anchor="middle">Treatment</text>
                    <circle cx="10" cy="20" r="4" fill="#ef4444" /> 
                    <text x="25" y="24" fill="white" font-size="10">A</text>
                    <path d="M 10 35 L 15 45 L 5 45 Z" fill="#22c55e" /> 
                    <text x="25" y="44" fill="white" font-size="10">B</text>
                    <rect x="5" y="55" width="9" height="9" fill="#3b82f6" /> 
                    <text x="25" y="64" fill="white" font-size="10">C</text>
                </g>
            </svg>
        </div>

        <!-- Identity Logic Summary -->
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
             <div class="p-3 bg-blue-500/10 border border-blue-500/20 rounded text-xs text-blue-200 italic">
                <strong>Between Groups (SSTR):</strong> The distance from the Group Means (X markers) to the Grand Mean (dashed line).
            </div>
            <div class="p-3 bg-green-500/10 border border-green-500/20 rounded text-xs text-green-200 italic">
                <strong>Within Groups (SSE):</strong> The distance from the individual data points to their own Group Means (X markers).
            </div>
        </div>
    </div>
</section>


            `
        },

'anova-math': {
    title: 'ANOVA Mathematical Notation',
    html: `
        <div class="space-y-8">
            <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                <h4 class="text-accent font-bold mb-4">Calculations (Slide 6)</h4>
                <div class="space-y-6 overflow-x-auto text-sm">
                    <div class="bg-black/20 p-4 rounded">
                        <p class="text-xs opacity-50 mb-2">Total Sum of Squares ($SST$):</p>
                        $$\\sum_{j=1}^{t} \\sum_{i=1}^{n_j} (Y_{ij} - \\bar{Y}_{..})^2$$
                    </div>
                    <div class="bg-black/20 p-4 rounded">
                        <p class="text-xs opacity-50 mb-2">Between Treatment ($SSTR$):</p>
                        $$\\sum_{j=1}^{t} n_j (\\bar{Y}_j - \\bar{Y}_{..})^2$$
                    </div>
                    <div class="bg-black/20 p-4 rounded">
                        <p class="text-xs opacity-50 mb-2">Within Treatment ($SSE$):</p>
                        $$\\sum_{j=1}^{t} \\sum_{i=1}^{n_j} (Y_{ij} - \\bar{Y}_j)^2$$
                    </div>
                </div>
                <div class="mt-4 grid grid-cols-2 gap-4 text-[10px] text-gray-400 font-mono">
                    <p>$\\bar{Y}_{..}$: Grand Mean</p>
                    <p>$\\bar{Y}_j$: Group Mean</p>
                    <p>$t$: Num. Groups</p>
                    <p>$n_j$: Obs in Group $j$</p>
                </div>
            </section>
        </div>
    `
},

'anova-table': {
            title: 'The ANOVA Table & Decision Rules',
            html: `
                <div class="space-y-10">
                    <!-- 1. THE ANOVA TABLE (Slide 8) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <h4 class="text-accent font-bold mb-6 uppercase text-xs tracking-widest border-b border-white/10 pb-2">ANOVA Table Construction</h4>
                        
                        <div class="overflow-x-auto">
                            <table class="w-full text-left text-[11px] md:text-xs border-collapse bg-black/20 rounded-lg overflow-hidden">
                                <thead class="bg-white/10 text-white font-bold uppercase">
                                    <tr>
                                        <th class="p-4 border-r border-white/5">Source of Variation</th>
                                        <th class="p-4 border-r border-white/5">Sum Squares (SS)</th>
                                        <th class="p-4 border-r border-white/5">Degrees of Freedom (df)</th>
                                        <th class="p-4">Mean Squares (MS)</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-300 font-mono">
                                    <!-- BETWEEN -->
                                    <tr class="border-b border-white/5 bg-blue-500/5">
                                        <td class="p-4 font-bold text-blue-300 italic">Between Treatments <br><span class="text-[9px] font-normal opacity-60">(Explained)</span></td>
                                        <td class="p-4">$$\\sum_{j=1}^{t} n_j (\\bar{Y}_j - \\bar{Y}_{..})^2$$</td>
                                        <td class="p-4 text-center">$t - 1$</td>
                                        <td class="p-4">$$MSTR = s^2_{between}$$</td>
                                    </tr>
                                    <!-- WITHIN -->
                                    <tr class="border-b border-white/5 bg-red-500/5">
                                        <td class="p-4 font-bold text-red-300 italic">Within Treatments <br><span class="text-[9px] font-normal opacity-60">(Unexplained)</span></td>
                                        <td class="p-4">$$\\sum_{j=1}^{t} \\sum_{i=1}^{n_j} (Y_{ij} - \\bar{Y}_j)^2$$</td>
                                        <td class="p-4 text-center">$n - t$</td>
                                        <td class="p-4">$$MSE = s^2_{within}$$</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <!-- 2. THE F-STATISTIC CALCULATION (Slide 8) -->
                    <section class="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl text-center">
                        <h4 class="text-xs font-bold text-white/40 uppercase mb-6 tracking-widest">The F-Test Statistic</h4>
                        
                        <div class="bg-black/40 p-6 rounded-xl border border-white/5 inline-block">
                            <div class="text-lg md:text-2xl text-white">
                                $$F = \\frac{SSTR / (t-1)}{SSE / (n-t)} = \\frac{MSTR}{MSE} = \\frac{s^2_{between}}{s^2_{within}} \\sim F_{(t-1), (n-t)}$$
                            </div>
                        </div>
                        
                        <div class="mt-4 text-[10px] text-gray-500 italic">
                            The calculated F-value follows an F-distribution with $(t-1)$ and $(n-t)$ degrees of freedom.
                        </div>
                    </section>

                    <!-- 3. THE DECISION RULE (Slide 8 - RED TEXT) -->
                    <section class="bg-red-500/10 border-2 border-red-500/30 p-6 rounded-2xl shadow-2xl relative overflow-hidden">
                        <!-- Background pulse for emphasis -->
                        <div class="absolute inset-0 bg-red-500/5 animate-pulse"></div>
                        
                        <div class="relative z-10">
                            <h4 class="text-red-400 font-black text-sm uppercase mb-4 tracking-tighter flex items-center gap-2">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                Statistical Decision Rule
                            </h4>
                            
                            <div class="text-lg md:text-xl font-bold text-white leading-relaxed">
                                Accept the null hypothesis ($H_0$) if:
                                <div class="mt-4 p-4 bg-black/60 rounded-xl font-mono border border-red-500/20 text-red-400">
                                    $F(\\text{calculated}) < F_{\\alpha, (t-1), (n-t)}$ 
                                    <br> <span class="text-white font-sans text-sm block my-2">-- OR --</span>
                                    $p\\text{-value } (F \\text{ calculated}) > \\alpha$
                                </div>
                            </div>
                            
                            <p class="text-[10px] text-red-300/60 mt-4 uppercase font-black tracking-widest italic">
                                Note: In most cases, we focus on rejecting $H_0$ when $p < \\alpha$.
                            </p>
                        </div>
                    </section>
                </div>
            `
        },

'anova-types': {
    title: 'Types of ANOVA',
    html: `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white/5 p-5 rounded-xl border border-white/10 shadow-lg group hover:border-accent transition-all">
                <h4 class="text-accent font-bold mb-3">One-Factor ANOVA</h4>
                <p class="text-[11px] text-gray-400">Contains <strong>one categorical</strong> independent variable to account for $SST$.</p>
            </div>

            <div class="bg-white/5 p-5 rounded-xl border border-white/10 shadow-lg group hover:border-accent transition-all">
                <h4 class="text-accent font-bold mb-3">Two-Factor ANOVA</h4>
                <p class="text-[11px] text-gray-400">Contains <strong>two categorical</strong> independent variables to account for $SST$.</p>
            </div>

            <div class="bg-white/5 p-5 rounded-xl border border-white/10 shadow-lg group hover:border-accent transition-all">
                <h4 class="text-accent font-bold mb-3">ANCOVA</h4>
                <p class="text-[11px] text-gray-400">Contains <strong>categorical</strong> AND <strong>numeric</strong> predictors (Covariates).</p>
            </div>
        </div>
    `
}

        
    }
};