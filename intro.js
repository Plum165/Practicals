// intro.js
export const introModule = {
    id: 'intro',
    title: 'Introduction to Multivariate Analysis',
    subtopics: [
        { id: 'intro-basics', title: '1. Multivariate Foundations' },
        { id: 'intro-data-types', title: '2. Data Types & Scales' },
        { id: 'intro-descriptive', title: '3. Descriptive Statistics' },
        { id: 'intro-matrices', title: '4. Matrix Algebra & Notation' },
        { id: 'intro-testing', title: '5. Hypothesis Testing Review' },
        { id: 'intro-hurdles', title: '6. Standardization & Hurdles' }
    ],
    content: {
       'intro-basics': {
            title: 'Multivariate Foundations',
            html: `
                <div class="space-y-10">
                    
                    <!-- 1. UNIVARIATE ANALYSIS (Slide 2) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 2</span>
                            <h3 class="text-xl font-bold text-accent">One Variable at a Time (Univariate)</h3>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="space-y-4">
                                <p class="text-sm text-gray-300 leading-relaxed">
                                    Before analyzing relationships, we look at variables individually. This provides <strong>useful information on that variable only</strong>.
                                </p>
                                
                                <div class="bg-black/30 p-4 rounded-lg border border-white/5">
                                    <h4 class="text-xs font-bold text-accent uppercase mb-2">Descriptive Statistics</h4>
                                    <ul class="grid grid-cols-2 gap-2 text-xs text-gray-400">
                                        <li class="flex items-center gap-2"><span class="w-1 h-1 bg-accent rounded-full"></span> Mean</li>
                                        <li class="flex items-center gap-2"><span class="w-1 h-1 bg-accent rounded-full"></span> Variance</li>
                                        <li class="flex items-center gap-2"><span class="w-1 h-1 bg-accent rounded-full"></span> Median</li>
                                        <li class="flex items-center gap-2"><span class="w-1 h-1 bg-accent rounded-full"></span> Range (Min/Max)</li>
                                    </ul>
                                </div>

                                <div class="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs text-yellow-200/70 italic">
                                    <strong>Limitation:</strong> Provides no information on relationships between variables.
                                </div>
                            </div>

                            <!-- Boxplot SVG Representation -->
                            <div class="bg-black/20 p-4 rounded-xl border border-white/5 flex flex-col items-center">
                                <h4 class="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-4 text-center">Graphical Representation: Boxplot</h4>
                                <svg width="160" height="200" viewBox="0 0 160 200" class="overflow-visible">
                                    <!-- Central Box -->
                                    <rect x="50" y="60" width="60" height="80" stroke="white" fill="white" fill-opacity="0.1" stroke-width="2"/>
                                    <!-- Median Line -->
                                    <line x1="50" y1="110" x2="110" y2="110" stroke="#E11D48" stroke-width="3"/>
                                    <!-- Whiskers -->
                                    <line x1="80" y1="30" x2="80" y2="60" stroke="white" stroke-width="2"/>
                                    <line x1="80" y1="140" x2="80" y2="170" stroke="white" stroke-width="2"/>
                                    <!-- End Caps -->
                                    <line x1="65" y1="30" x2="95" y2="30" stroke="white" stroke-width="2"/>
                                    <line x1="65" y1="170" x2="95" y2="170" stroke="white" stroke-width="2"/>
                                    
                                    <!-- Labels -->
                                    <text x="115" y="35" fill="white" font-size="8" opacity="0.6">Max</text>
                                    <text x="115" y="70" fill="white" font-size="8" opacity="0.6">Q3</text>
                                    <text x="115" y="114" fill="#E11D48" font-size="8" font-weight="bold">Median</text>
                                    <text x="115" y="145" fill="white" font-size="8" opacity="0.6">Q1</text>
                                    <text x="115" y="175" fill="white" font-size="8" opacity="0.6">Min</text>
                                </svg>
                            </div>
                        </div>
                    </section>

                    <!-- 2. MULTIVARIATE ANALYSIS (Slide 3 & 12) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 3</span>
                            <h3 class="text-xl font-bold text-accent">Relationships Between Variables</h3>
                        </div>
                        
                        <p class="text-sm text-gray-300 mb-6 leading-relaxed">
                            <strong>Multivariate analysis</strong> studies the relationships between multiple (more than 1) variables simultaneously.
                        </p>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="bg-white/5 p-4 rounded-lg border border-white/10">
                                <h4 class="text-accent font-bold mb-2 flex items-center gap-2">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                                    Explorative Analysis
                                </h4>
                                <ul class="list-disc list-inside text-xs space-y-1 opacity-70">
                                    <li>Correspondence Analysis</li>
                                    <li>Factor Analysis</li>
                                    <li>Item Reliability</li>
                                    <li>Cluster Analysis</li>
                                    <li>Multidimensional Scaling</li>
                                </ul>
                            </div>
                            <div class="bg-white/5 p-4 rounded-lg border border-white/10">
                                <h4 class="text-accent font-bold mb-2 flex items-center gap-2">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                    Predictive Analysis
                                </h4>
                                <ul class="list-disc list-inside text-xs space-y-1 opacity-70">
                                    <li>Multiple Regression</li>
                                    <li>ANOVA & ANCOVA</li>
                                    <li>Discriminant Analysis</li>
                                    <li>Classification Trees</li>
                                    <li>Structural Equation Modelling</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <!-- 3. CAUSAL RELATIONSHIPS (Slide 3) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg mt-8">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 3</span>
                            <h3 class="text-xl font-bold text-accent">Example: Causal Relationship</h3>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <p class="text-sm text-gray-300 leading-relaxed mb-4">
                                    Multivariate analysis allows us to observe how variables influence one another. 
                                </p>
                                <div class="bg-red-500/10 border-l-4 border-red-500 p-4 rounded">
                                    <p class="text-sm font-bold text-red-200">The Inverse Relationship:</p>
                                    <p class="text-xs text-gray-400 mt-1 italic">"The higher the price, the smaller the quantity sold."</p>
                                </div>
                                <ul class="mt-6 space-y-2 text-xs text-gray-400">
                                    <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-accent rounded-full"></span> Variable 1: Price (Independent)</li>
                                    <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-accent rounded-full"></span> Variable 2: Quantity Sold (Dependent)</li>
                                </ul>
                            </div>

                            <!-- Causal Relationship Graph SVG -->
                            <div class="bg-black/20 p-6 rounded-xl border border-white/5">
                                <h4 class="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-6 text-center">Range of Daily Newspapers Sold (x100)</h4>
                                <svg viewBox="0 0 320 200" class="w-full h-auto overflow-visible">
                                    <!-- Y-Axis (0 to 12) -->
                                    <g font-size="8" fill="white" opacity="0.5" text-anchor="end">
                                        <text x="35" y="180">0</text>
                                        <text x="35" y="152">2</text>
                                        <text x="35" y="124">4</text>
                                        <text x="35" y="96">6</text>
                                        <text x="35" y="68">8</text>
                                        <text x="35" y="40">10</text>
                                        <text x="35" y="12">12</text>
                                    </g>
                                    <line x1="40" y1="180" x2="40" y2="10" stroke="white" stroke-width="1" opacity="0.3"/>

                                    <!-- Price Bars (Showing Range as per Slide 3) -->
                                    <!-- R1.00 (Range 6 to 10) -->
                                    <rect x="60" y="40" width="30" height="56" fill="#884444" opacity="0.8" rx="1" />
                                    <text x="75" y="195" fill="white" font-size="8" text-anchor="middle" opacity="0.8">R1.00</text>

                                    <!-- R2.00 (Range 5 to 10) -->
                                    <rect x="120" y="40" width="30" height="70" fill="#884444" opacity="0.8" rx="1" />
                                    <text x="135" y="195" fill="white" font-size="8" text-anchor="middle" opacity="0.8">R2.00</text>

                                    <!-- R3.50 (Range 3 to 8) -->
                                    <rect x="180" y="68" width="30" height="70" fill="#884444" opacity="0.8" rx="1" />
                                    <text x="195" y="195" fill="white" font-size="8" text-anchor="middle" opacity="0.8">R3.50</text>

                                    <!-- R5.00 (Range 2 to 5) -->
                                    <rect x="240" y="110" width="30" height="42" fill="#884444" opacity="0.8" rx="1" />
                                    <text x="255" y="195" fill="white" font-size="8" text-anchor="middle" opacity="0.8">R5.00</text>

                                    <!-- X-Axis Line -->
                                    <line x1="40" y1="180" x2="300" y2="180" stroke="white" stroke-width="1" opacity="0.3"/>
                                </svg>
                                <p class="text-center text-[9px] text-gray-500 mt-4 uppercase tracking-widest">Negative Causal Trend Detected</p>
                            </div>
                        </div>
                    </section>
                </div>
            `
        },
        
        'intro-data-types': {
            title: 'Data Types & Standardization',
            html: `
                <div class="space-y-12">
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 16 & 17</span>
                            <h3 class="text-xl font-bold text-accent">Measurement Scales</h3>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="bg-black/30 p-5 rounded-lg border border-white/5">
                                <h4 class="text-accent font-bold mb-3">Numerical</h4>
                                <ul class="text-sm text-gray-300 space-y-2">
                                    <li><strong>Interval:</strong> Differences are meaningful.</li>
                                    <li><strong>Ratio:</strong> Has a true zero.</li>
                                    <li><strong>Special: Likert Scale</strong> (Treat as numerical via scoring).</li>
                                </ul>
                            </div>
                            <div class="bg-black/30 p-5 rounded-lg border border-white/5">
                                <h4 class="text-accent font-bold mb-3">Categorical</h4>
                                <ul class="text-sm text-gray-300 space-y-2">
                                    <li><strong>Nominal:</strong> No order (e.g. KZN, WC).</li>
                                    <li><strong>Ordinal:</strong> Ordered (e.g. Degree > Diploma).</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <!-- 2. SPECIAL DATA TYPES: LIKERT SCALE (Slide 17) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 17</span>
                            <h3 class="text-xl font-bold text-accent">Special Data Types: Likert Scale</h3>
                        </div>

                        <div class="bg-accent/10 p-5 rounded-lg border border-accent/20">
                            <p class="text-sm mb-4">Commonly used in research surveys to measure agreement levels:</p>
                            
                            <div class="flex flex-wrap gap-2 mb-6">
                                <span class="bg-black/40 border border-white/10 px-2 py-1 rounded text-[10px]">Strongly Disagree</span>
                                <span class="bg-black/40 border border-white/10 px-2 py-1 rounded text-[10px]">Disagree</span>
                                <span class="bg-black/40 border border-white/10 px-2 py-1 rounded text-[10px]">Neutral</span>
                                <span class="bg-black/40 border border-white/10 px-2 py-1 rounded text-[10px]">Agree</span>
                                <span class="bg-black/40 border border-white/10 px-2 py-1 rounded text-[10px]">Strongly Agree</span>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div class="flex items-start gap-2">
                                    <span class="text-accent font-bold">✓</span>
                                    <p><strong>Truly Ordinal:</strong> The order of response is meaningful.</p>
                                </div>
                                <div class="flex items-start gap-2">
                                    <span class="text-accent font-bold">✓</span>
                                    <p><strong>Processing:</strong> Assign scores <span class="text-white font-mono">(1, 2, 3, 4, 5)</span> and treat as <strong class="text-white">numerical</strong> for analysis.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 18</span>
                            <h3 class="text-xl font-bold text-accent">Data Standardisation</h3>
                        </div>
                        <div class="space-y-6">
                            <p class="text-sm text-gray-300">Scaled to <strong>mean zero</strong> and <strong>unit standard deviation</strong> ($s=1$).</p>
                            <div class="bg-black/20 p-6 rounded-xl border border-white/5 overflow-x-auto">
                                <p class="text-[10px] text-accent uppercase mb-4">Scaled Data Matrix ($\mathbf{Z}$)</p>
                                <div class="text-sm">
                                    $$\\mathbf{Z} = \\begin{bmatrix} 
                                    \\frac{x_{11}-\\bar{x}_1}{s_1} & \\frac{x_{12}-\\bar{x}_2}{s_2} & \\frac{x_{13}-\\bar{x}_3}{s_3} \\\\\\\\ 
                                    \\frac{x_{21}-\\bar{x}_1}{s_1} & \\frac{x_{22}-\\bar{x}_2}{s_2} & \\frac{x_{23}-\\bar{x}_3}{s_3} \\\\\\\\ 
                                    \\frac{x_{31}-\\bar{x}_1}{s_1} & \\frac{x_{32}-\\bar{x}_2}{s_2} & \\frac{x_{33}-\\bar{x}_3}{s_3} \\\\\\\\ 
                                    \\frac{x_{41}-\\bar{x}_1}{s_1} & \\frac{x_{42}-\\bar{x}_2}{s_2} & \\frac{x_{43}-\\bar{x}_3}{s_3} \\\\\\\\ 
                                    \\frac{x_{51}-\\bar{x}_1}{s_1} & \\frac{x_{52}-\\bar{x}_2}{s_2} & \\frac{x_{53}-\\bar{x}_3}{s_3} 
                                    \\end{bmatrix}$$
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            `
        },

        'intro-descriptive': {
            title: 'Descriptive Statistics & Frequencies',
            html: `
                <div class="space-y-10">
                       <!-- MEAN, VARIANCE, CORRELATION GRID -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-white/5 p-5 rounded-lg border border-white/10 shadow-inner">
                            <h4 class="text-accent font-bold mb-4 flex items-center gap-2">
                                <span class="w-1 h-4 bg-accent rounded-full"></span>
                                Central Tendency & Dispersion
                            </h4>
                            <div class="space-y-6">
                                <div class="group">
                                    <p class="text-xs font-bold uppercase tracking-widest text-accent/60 group-hover:text-accent transition-colors">Sample Mean ($\\bar{x}$)</p>
                                    <p class="text-sm text-gray-400 mt-1 leading-relaxed">
                                        Represents the <strong>center</strong> of the data. It is the arithmetic average.
                                    </p>
                                    <div class="bg-black/30 p-3 rounded-md mt-2 text-center text-lg border border-white/5">
                                        $$\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i$$
                                    </div>
                                </div>
                                <div class="group">
                                    <p class="text-xs font-bold uppercase tracking-widest text-accent/60 group-hover:text-accent transition-colors">Sample Variance ($s^2$)</p>
                                    <p class="text-sm text-gray-400 mt-1 leading-relaxed">
                                        Represents the <strong>spread</strong>. It measures the average squared distance from the mean.
                                    </p>
                                    <div class="bg-black/30 p-3 rounded-md mt-2 text-center text-lg border border-white/5">
                                        $$s^2 = \\frac{1}{n-1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2$$
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white/5 p-5 rounded-lg border border-white/10 flex flex-col justify-center">
                            <h4 class="text-accent font-bold mb-4 flex items-center gap-2">
                                <span class="w-1 h-4 bg-accent rounded-full"></span>
                                Correlation Coefficient ($r$)
                            </h4>
                            <p class="text-sm text-gray-400 leading-relaxed mb-4">
                                Measures the <strong>strength and direction</strong> of the linear relationship between two variables.
                            </p>
                            <div class="bg-black/30 p-4 rounded-md text-center text-lg border border-white/5">
                                $$r = \\frac{\\frac{1}{n-1} \\sum (x_i - \\bar{x})(y_i - \\bar{y})}{s_x s_y}$$
                            </div>
                            <div class="mt-4 grid grid-cols-3 gap-2 text-[10px] text-center uppercase tracking-tighter opacity-60">
                                <div class="border-r border-white/10">Negative <br> (-1)</div>
                                <div class="border-r border-white/10">No Relation <br> (0)</div>
                                <div>Positive <br> (+1)</div>
                            </div>
                        </div>
                    </div>

                    <!-- 2. FREQUENCIES SECTION (Slide 6) -->
                    <div>
                        <h4 class="text-2xl font-bold mb-4 border-l-4 border-accent pl-3">Frequencies & Distribution</h4>
                        <p class="mb-4 text-gray-300">Frequency refers to the number of observations falling into a specific category. <strong>Relative Frequency</strong> is the proportion of the total sample in that category.</p>
                        
                        <!-- Raw Data Example -->
                        <div class="bg-black/30 p-4 rounded-lg mb-6">
                            <h5 class="text-xs font-bold text-accent uppercase mb-3">Example: January Newspaper Sales (Raw Data)</h5>
                            <div class="grid grid-cols-11 gap-1 text-center font-mono text-xs">
                                <div class="p-1 bg-white/5">5</div><div class="p-1 bg-white/5">4</div><div class="p-1 bg-white/5">3</div><div class="p-1 bg-white/5">4</div><div class="p-1 bg-white/5">5</div><div class="p-1 bg-white/5">3</div><div class="p-1 bg-white/5">5</div><div class="p-1 bg-white/5">3</div><div class="p-1 bg-white/5">1</div><div class="p-1 bg-white/5">6</div><div class="p-1 bg-white/5">4</div>
                                <div class="p-1 bg-white/5">4</div><div class="p-1 bg-white/5">9</div><div class="p-1 bg-white/5">3</div><div class="p-1 bg-white/5">5</div><div class="p-1 bg-white/5">6</div><div class="p-1 bg-white/5">1</div><div class="p-1 bg-white/5">4</div><div class="p-1 bg-white/5">6</div><div class="p-1 bg-white/5">2</div><div class="p-1 bg-white/5">3</div><div class="p-1 bg-white/10 opacity-0">-</div>
                                <div class="p-1 bg-white/5">5</div><div class="p-1 bg-white/5">5</div><div class="p-1 bg-white/5">9</div><div class="p-1 bg-white/5">8</div><div class="p-1 bg-white/5">6</div><div class="p-1 bg-white/5">4</div><div class="p-1 bg-white/5">6</div><div class="p-1 bg-white/5">4</div><div class="p-1 bg-white/5">7</div><div class="p-1 bg-white/5">3</div><div class="p-1 bg-white/10 opacity-0">-</div>
                            </div>
                        </div>

                        <!-- Frequency Table -->
                        <div class="overflow-x-auto">
                            <table class="w-full text-left border-collapse bg-white/5 rounded-lg overflow-hidden">
                                <thead class="bg-accent text-black font-bold text-sm">
                                    <tr>
                                        <th class="p-3">Category (Sales)</th>
                                        <th class="p-3 text-center">Frequency ($f_i$)</th>
                                        <th class="p-3 text-right">Relative Frequency ($f_i / n$)</th>
                                    </tr>
                                </thead>
                                <tbody class="text-sm">
                                    <tr class="border-b border-white/5">
                                        <td class="p-3">$\\le 2$</td>
                                        <td class="p-3 text-center">3</td>
                                        <td class="p-3 text-right">$3/31 \\approx 0.096$</td>
                                    </tr>
                                    <tr class="border-b border-white/5">
                                        <td class="p-3">$(2, 4]$</td>
                                        <td class="p-3 text-center">13</td>
                                        <td class="p-3 text-right">$13/31 \\approx 0.419$</td>
                                    </tr>
                                    <tr class="border-b border-white/5">
                                        <td class="p-3">$(4, 6]$</td>
                                        <td class="p-3 text-center">11</td>
                                        <td class="p-3 text-right">$11/31 \\approx 0.355$</td>
                                    </tr>
                                    <tr class="border-b border-white/5">
                                        <td class="p-3">$(6, 8]$</td>
                                        <td class="p-3 text-center">2</td>
                                        <td class="p-3 text-right">$2/31 \\approx 0.065$</td>
                                    </tr>
                                    <tr class="border-b border-white/5">
                                        <td class="p-3">$> 8$</td>
                                        <td class="p-3 text-center">2</td>
                                        <td class="p-3 text-right">$2/31 \\approx 0.065$</td>
                                    </tr>
                                    <tr class="bg-white/10 font-bold">
                                        <td class="p-3">TOTAL ($n$)</td>
                                        <td class="p-3 text-center">31</td>
                                        <td class="p-3 text-right">1.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- Diagram Representation -->
                        <div class="mt-8 flex flex-col items-center">
                            <h5 class="text-sm font-bold mb-4">Frequency Histogram Visualization</h5>
                            <svg width="400" height="220" viewBox="0 0 400 220" class="overflow-visible">
                                <!-- Y-Axis labels -->
                                <text x="10" y="200" fill="white" font-size="10" text-anchor="end">0</text>
                                <text x="10" y="130" fill="white" font-size="10" text-anchor="end">7</text>
                                <text x="10" y="60" fill="white" font-size="10" text-anchor="end">14</text>
                                
                                <!-- Horizontal Grid Lines -->
                                <line x1="20" y1="200" x2="380" y2="200" stroke="white" stroke-opacity="0.2" />
                                <line x1="20" y1="130" x2="380" y2="130" stroke="white" stroke-opacity="0.1" />
                                <line x1="20" y1="60" x2="380" y2="60" stroke="white" stroke-opacity="0.1" />

                                <!-- Bars (Heights calculated: h = freq * 10) -->
                                <!-- 3 units -->
                                <rect x="40" y="170" width="50" height="30" fill="#E11D48" rx="2" />
                                <!-- 13 units -->
                                <rect x="105" y="70" width="50" height="130" fill="#E11D48" rx="2" />
                                <!-- 11 units -->
                                <rect x="170" y="90" width="50" height="110" fill="#E11D48" rx="2" />
                                <!-- 2 units -->
                                <rect x="235" y="180" width="50" height="20" fill="#E11D48" rx="2" />
                                <!-- 2 units -->
                                <rect x="300" y="180" width="50" height="20" fill="#E11D48" rx="2" />

                                <!-- X-Axis Labels -->
                                <text x="65" y="215" fill="white" font-size="10" text-anchor="middle">≤ 2</text>
                                <text x="130" y="215" fill="white" font-size="10" text-anchor="middle">(2,4]</text>
                                <text x="195" y="215" fill="white" font-size="10" text-anchor="middle">(4,6]</text>
                                <text x="260" y="215" fill="white" font-size="10" text-anchor="middle">(6,8]</text>
                                <text x="325" y="215" fill="white" font-size="10" text-anchor="middle">> 8</text>
                            </svg>
                            <p class="text-xs italic mt-4 opacity-60">Figure: Distribution of Daily Newspaper Sales</p>
                        </div>

                        <!-- CORRELATION SECTION (Slide 7 - Fully Detailed) -->
<section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg mt-10">
    <div class="flex items-center gap-3 mb-6">
        
        <h3 class="text-2xl font-extrabold text-accent">Descriptive Statistics: Correlation</h3>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Theory & Formula -->
        <div class="space-y-6">
            <div>
                <h4 class="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Concept</h4>
                <p class="text-sm text-gray-300 leading-relaxed">
                    Correlation measures the linear relationship between two variables. The value of the coefficient $r$ indicates the strength and direction:
                </p>
                <ul class="mt-3 space-y-2">
                    <li class="flex items-center gap-2 text-sm">
                        <span class="w-2 h-2 rounded-full bg-green-500"></span>
                        <strong class="text-white">+1:</strong> Strong positive relationship
                    </li>
                    <li class="flex items-center gap-2 text-sm">
                        <span class="w-2 h-2 rounded-full bg-red-500"></span>
                        <strong class="text-white">-1:</strong> Strong negative relationship
                    </li>
                    <li class="flex items-center gap-2 text-sm">
                        <span class="w-2 h-2 rounded-full bg-gray-500"></span>
                        <strong class="text-white">0:</strong> No linear relationship
                    </li>
                </ul>
            </div>

            <div>
                <h4 class="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Sample Correlation Coefficient</h4>
                <div class="bg-black/40 p-5 rounded-lg border border-white/5 text-center">
                    <div class="text-xl">
                        $$r = \\frac{1}{n-1} \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{s_x s_y}$$
                    </div>
                </div>
            </div>
        </div>

        <!-- Graph Representation -->
        <div class="bg-black/20 p-6 rounded-xl border border-white/5">
            <h4 class="text-center text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                Example: Price vs. Quantity Sold
            </h4>
            
            <div class="relative">
                <svg viewBox="0 0 300 220" class="w-full h-auto overflow-visible">
                    <!-- Y-Axis (Quantity) -->
                    <line x1="40" y1="20" x2="40" y2="180" stroke="white" stroke-width="1" />
                    <!-- X-Axis (Price) -->
                    <line x1="40" y1="180" x2="280" y2="180" stroke="white" stroke-width="1" />
                    
                    <!-- Y Labels (0 to 10) -->
                    <g font-size="8" fill="white" opacity="0.6" text-anchor="end">
                        <text x="35" y="180">0</text>
                        <text x="35" y="148">2</text>
                        <text x="35" y="116">4</text>
                        <text x="35" y="84">6</text>
                        <text x="35" y="52">8</text>
                        <text x="35" y="20">10</text>
                    </g>
                    
                    <!-- X Labels (R1 to R6) -->
                    <g font-size="8" fill="white" opacity="0.6" text-anchor="middle">
                        <text x="40" y="195">0</text>
                        <text x="80" y="195">R2</text>
                        <text x="120" y="195">R4</text>
                        <text x="160" y="195">R6</text>
                    </g>

                    <!-- Scattered Points (Showing Negative Correlation) -->
                    <!-- High Price = Low Sales -->
                    <circle cx="70"  cy="50"  r="4" fill="#ef4444" /> <!-- Point 1 -->
                    <circle cx="110" cy="65"  r="4" fill="#ef4444" /> <!-- Point 2 -->
                    <circle cx="160" cy="90"  r="4" fill="#ef4444" /> <!-- Point 3 -->
                    <circle cx="230" cy="165" r="4" fill="#ef4444" /> <!-- Point 4 -->

                    <!-- Axis Titles -->
                    <text x="160" y="215" fill="white" font-size="9" text-anchor="middle" font-weight="bold">Price of newspaper (Rands)</text>
                    <text x="-100" y="15" fill="white" font-size="9" text-anchor="middle" font-weight="bold" transform="rotate(-90)">Quantity Sold</text>
                </svg>
            </div>
            
            <div class="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded text-center">
                <p class="text-xs text-red-200 font-bold uppercase tracking-tighter">
                    Interpretation: Negative Correlation
                </p>
                <p class="text-[10px] text-gray-400">As price increases, the number of newspapers sold decreases.</p>
            </div>
        </div>
    </div>
</section>

                    </div>
                </div>
            `
        },
        'intro-matrices': {
            title: 'Matrix Algebra & Notation',
            html: `
                <div class="space-y-12">
                    
                    <!-- 1. THE DATA MATRIX (Slide 13) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 13</span>
                            <h3 class="text-xl font-bold text-accent">The Data Matrix</h3>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                            <div class="space-y-4">
                                <p class="text-sm text-gray-300 leading-relaxed">
                                    In multivariate analysis, data is organized into a <strong>rectangular array</strong> called a matrix.
                                </p>
                                <div class="bg-black/40 p-4 rounded-lg border border-white/5">
                                    <p class="text-white font-mono text-lg mb-2">$\\mathbf{X} : n \\times p$</p>
                                    <ul class="text-xs space-y-2 text-gray-400">
                                        <li class="flex justify-between"><span>$n$ Rows:</span> <span class="text-accent">Samples / Observations</span></li>
                                        <li class="flex justify-between"><span>$p$ Columns:</span> <span class="text-accent">Variables</span></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="bg-white/5 p-4 rounded-lg border border-white/10">
                                <h4 class="text-center text-[10px] font-bold uppercase tracking-widest opacity-50 mb-4">Example: $5 \\times 3$ Data Matrix</h4>
                                <div class="text-center text-lg">
                                    $$\\mathbf{X}_{5 \\times 3} = \\begin{bmatrix} 
                                    x_{11} & x_{12} & x_{13} \\\\ 
                                    x_{21} & x_{22} & x_{23} \\\\ 
                                    x_{31} & x_{32} & x_{33} \\\\ 
                                    x_{41} & x_{42} & x_{43} \\\\ 
                                    x_{51} & x_{52} & x_{53} 
                                    \\end{bmatrix}$$
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- 2. SPECIAL MATRICES (Slide 14) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 14</span>
                            <h3 class="text-xl font-bold text-accent">Special Matrices</h3>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <!-- Column Vector -->
                            <div class="bg-black/30 p-4 rounded-lg border border-white/5">
                                <h4 class="text-xs font-bold text-accent uppercase mb-4 text-center">Column Vector</h4>
                                <div class="text-sm text-center">
                                    $$\\mathbf{a} : n \\times 1 = \\begin{bmatrix} a_1 \\\\ a_2 \\\\ \\vdots \\\\ a_n \\end{bmatrix}$$
                                </div>
                            </div>

                            <!-- Row Vector -->
                            <div class="bg-black/30 p-4 rounded-lg border border-white/5">
                                <h4 class="text-xs font-bold text-accent uppercase mb-4 text-center">Row Vector</h4>
                                <div class="text-sm text-center">
                                    $$\\mathbf{b}' : 1 \\times p = \\begin{bmatrix} b_1 & b_2 & \\dots & b_p \\end{bmatrix}$$
                                </div>
                            </div>

                            <!-- Scalar -->
                            <div class="bg-black/30 p-4 rounded-lg border border-white/5">
                                <h4 class="text-xs font-bold text-accent uppercase mb-4 text-center">Scalar</h4>
                                <div class="text-sm text-center py-8">
                                    <span class="text-3xl font-serif italic text-white">$x$</span>
                                </div>
                                <p class="text-[10px] text-gray-500 mt-4 text-center italic">Single number / value.</p>
                            </div>
                        </div>
                    </section>

                    <!-- 3. NOTATION RULES (Slide 15) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 15</span>
                            <h3 class="text-xl font-bold text-accent">Matrix & Vector Notation</h3>
                        </div>

                        <div class="overflow-x-auto">
                            <table class="w-full text-left border-collapse bg-black/20 rounded-lg overflow-hidden">
                                <thead class="bg-white/10 text-accent text-xs font-bold uppercase">
                                    <tr>
                                        <th class="p-4">Entity</th>
                                        <th class="p-4">Typed (Printed)</th>
                                        <th class="p-4">Handwritten</th>
                                    </tr>
                                </thead>
                                <tbody class="text-sm">
                                    <tr class="border-b border-white/5">
                                        <td class="p-4 font-bold text-white">Matrix</td>
                                        <td class="p-4">Bold Upper: $\\mathbf{X}$</td>
                                        <td class="p-4">Upper Case: $X$</td>
                                    </tr>
                                    <tr class="border-b border-white/5">
                                        <td class="p-4 font-bold text-white">Vector</td>
                                        <td class="p-4">Bold Lower: $\\mathbf{a, b'}$</td>
                                        <!-- Fixed underline issue below -->
                                        <td class="p-4">Underlined: $\\underline{a}, \\underline{b}'$</td>
                                    </tr>
                                    <tr class="border-b border-white/5">
                                        <td class="p-4 font-bold text-white">Scalar</td>
                                        <td class="p-4 italic">Italic: $x$</td>
                                        <td class="p-4">Lower Case: $x$</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            `
        },
        'intro-testing': {
            title: 'Hypothesis Testing Review',
            html: `
                <div class="space-y-12">
                    
                    <!-- 1. Z-TEST (Slide 8 - High Detail) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 8</span>
                            <h3 class="text-2xl font-extrabold text-accent">Hypothesis Testing: Z-test</h3>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                            <div class="space-y-4">
                                <div>
                                    <h4 class="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Formal Setup</h4>
                                    <ul class="list-disc ml-5 text-sm space-y-2 text-gray-300">
                                        <li>If $X \\sim \\text{normal}(\\mu, \\sigma^2)$ and we want to test:</li>
                                        <li class="text-white font-semibold">$H_0: \\mu = \\mu_0$ <span class="text-gray-500 font-normal">vs</span> $H_a: \\mu \\neq \\mu_0$</li>
                                        <li>Random sample: $x_1, x_2, \\dots, x_n$</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 class="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Test Statistics</h4>
                                    <div class="bg-black/40 p-4 rounded-lg border border-white/5 space-y-4">
                                        <div>
                                            <p class="text-[10px] text-accent uppercase mb-1">Theoretical Statistic</p>
                                            <div class="text-lg">$$Z = \\frac{\\bar{X} - \\mu_0}{\\sigma / \\sqrt{n}}$$</div>
                                        </div>
                                        <div class="border-t border-white/10 pt-3">
                                            <p class="text-[10px] text-accent uppercase mb-1">Calculated Value ($z$)</p>
                                            <div class="text-lg">$$z = \\frac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}$$</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-white/5 p-5 rounded-xl border border-white/10">
                                <h4 class="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 text-center">Null Distribution & P-Value</h4>
                                <div class="space-y-4 text-sm">
                                    <p class="text-center">If $H_0$ is true, then: <br> <span class="text-xl text-white font-mono">$Z \\sim \\text{normal}(0, 1)$</span></p>
                                    
                                    <div class="bg-accent/10 p-4 rounded-lg border border-accent/20">
                                        <p class="font-bold text-accent mb-1">p-value calculation:</p>
                                        <div class="font-mono text-lg">$$2P(Z > |z|)$$</div>
                                        <p class="text-[10px] opacity-70 mt-1">Calculated given that $H_0$ is true.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Graph Design -->
                        <div class="mt-8">
                            <h4 class="text-center text-xs font-bold uppercase tracking-widest text-white/30 mb-6">Normal Distribution Curve (-3.5 to 3.5)</h4>
                            <div class="relative w-full max-w-2xl mx-auto bg-black/20 p-6 rounded-xl border border-white/5">
                                <svg viewBox="0 0 400 200" class="w-full h-auto overflow-visible">
                                    <!-- Shaded Rejection Regions (Tails) -->
                                    <path d="M 50 180 L 50 170 Q 75 170 100 150 L 100 180 Z" fill="#ef4444" opacity="0.6" />
                                    <path d="M 300 150 Q 325 170 350 170 L 350 180 L 300 180 Z" fill="#ef4444" opacity="0.6" />
                                    
                                    <!-- The Bell Curve -->
                                    <path d="M 20 180 Q 50 180 100 150 Q 200 -20 300 150 Q 350 180 380 180" 
                                          stroke="#22d3ee" fill="none" stroke-width="3" />
                                    
                                    <line x1="10" y1="180" x2="390" y2="180" stroke="white" stroke-width="1" />
                                    
                                    <g font-size="9" fill="white" opacity="0.6" text-anchor="middle">
                                        <text x="200" y="195">0</text>
                                        <text x="143" y="195">-1</text>
                                        <text x="86" y="195">-2</text>
                                        <text x="29" y="195">-3</text>
                                        <text x="257" y="195">1</text>
                                        <text x="314" y="195">2</text>
                                        <text x="371" y="195">3</text>
                                    </g>

                                    <line x1="314" y1="180" x2="314" y2="135" stroke="#fbbf24" stroke-width="2" stroke-dasharray="3" />
                                    <text x="314" y="130" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">Calculated z</text>
                                </svg>
                            </div>
                        </div>
                    </section>

                  <!-- 2. T-TEST (Slides 9-10 - Fully Detailed) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 9 & 10</span>
                            <h3 class="text-2xl font-extrabold text-accent">Hypothesis Testing: t-test</h3>
                        </div>

                        <!-- Formal Setup -->
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                            <div class="space-y-4">
                                <div>
                                    <h4 class="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Setup & Assumptions</h4>
                                    <ul class="list-disc ml-5 text-sm space-y-2 text-gray-300">
                                        <li>If $X \\sim \\text{normal}(\\mu, \\sigma^2)$ with <strong class="text-white">$\\sigma^2$ unknown</strong>.</li>
                                        <li>We estimate the population variance using the sample variance $s^2$.</li>
                                        <li>Random sample: $x_1, x_2, \\dots, x_n$</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 class="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Statistics</h4>
                                    <div class="bg-black/40 p-4 rounded-lg border border-white/5 space-y-4">
                                        <div>
                                            <p class="text-[10px] text-accent uppercase mb-1">Theoretical Statistic ($T$)</p>
                                            <div class="text-lg">$$T = \\frac{\\bar{X} - \\mu_0}{s / \\sqrt{n}}$$</div>
                                        </div>
                                        <div class="border-t border-white/10 pt-3">
                                            <p class="text-[10px] text-accent uppercase mb-1">Calculated Value ($t$)</p>
                                            <div class="text-lg">$$t = \\frac{\\bar{x} - \\mu_0}{s / \\sqrt{n}}$$</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Distribution Logic -->
                            <div class="bg-white/5 p-5 rounded-xl border border-white/10">
                                <h4 class="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 text-center">Null Distribution</h4>
                                <div class="space-y-4 text-sm text-center">
                                    <p>If $H_0$ is true, the statistic follows a t-distribution:</p>
                                    <div class="text-xl text-white font-mono bg-black/20 py-2 rounded">
                                        $T \\sim t(n - 1)$
                                    </div>
                                    <p class="text-gray-400">Where $n-1$ represents the <strong>Degrees of Freedom</strong>.</p>
                                    
                                    <div class="bg-accent/10 p-3 rounded-lg border border-accent/20 text-left">
                                        <p class="font-bold text-accent mb-1 text-xs uppercase">P-Value (Right-Tailed Example):</p>
                                        <div class="font-mono text-lg">$$P(T > t)$$</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Worked Example: Milk Bottles -->
                        <div class="bg-accent/5 p-6 rounded-xl border border-accent/20 mb-8">
                            <h4 class="text-lg font-bold text-white mb-4">Example: Milk Bottle Volume (Slide 10)</h4>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <p class="text-xs font-bold text-accent uppercase mb-2">The Data (10 observations):</p>
                                    <div class="grid grid-cols-5 gap-1 text-center font-mono text-[10px] mb-4">
                                        <div class="bg-white/10 p-1 rounded">1.03</div><div class="bg-white/10 p-1 rounded">0.97</div>
                                        <div class="bg-white/10 p-1 rounded">1.01</div><div class="bg-white/10 p-1 rounded">0.95</div>
                                        <div class="bg-white/10 p-1 rounded">0.98</div><div class="bg-white/10 p-1 rounded">1.14</div>
                                        <div class="bg-white/10 p-1 rounded">0.99</div><div class="bg-white/10 p-1 rounded">0.97</div>
                                        <div class="bg-white/10 p-1 rounded">1.02</div><div class="bg-white/10 p-1 rounded">1.03</div>
                                    </div>
                                    <p class="text-sm text-gray-300 italic">Assume $X = \text{milk in 1l bottle} \sim \text{normal}$</p>
                                </div>
                                <div class="space-y-3">
                                    <div class="text-sm">
                                        <p><strong class="text-accent">Test:</strong> $H_0: \\mu = 1l$ vs $H_a: \\mu < 1l$</p>
                                        <p><strong class="text-accent">Calculated Mean:</strong> $\\bar{x} = 1.009$</p>
                                        <p><strong class="text-accent">Std Dev:</strong> $s = 0.0536$</p>
                                    </div>
                                    <div class="bg-black/40 p-3 rounded text-center">
                                        <p class="text-[10px] opacity-50 uppercase">Calculation</p>
                                        <div class="text-base font-bold">$$t = \\frac{1.009 - 1.000}{0.0536 / \\sqrt{10}} = 0.531$$</div>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-6 p-4 bg-black/40 rounded-lg border-l-4 border-red-500">
                                <p class="text-sm"><strong>p-value:</strong> $P(T < 0.531) = 0.696$</p>
                                <p class="text-sm mt-2 text-gray-300">
                                    <strong>Conclusion:</strong> Since the p-value is large, there is <span class="text-red-400 font-bold uppercase underline">no evidence</span> to reject $H_0$. 
                                    We cannot conclude that the bottles contain less than 1l.
                                </p>
                            </div>
                        </div>

                        <!-- Graph Design for T-Distribution -->
                        <div>
                            <h4 class="text-center text-xs font-bold uppercase tracking-widest text-white/30 mb-6">t-distribution Curve (df = 9)</h4>
                            <div class="relative w-full max-w-2xl mx-auto bg-black/20 p-6 rounded-xl border border-white/5">
                                <svg viewBox="0 0 400 200" class="w-full h-auto overflow-visible">
                                    <!-- Shaded p-value area (T < 0.531) -->
                                    <path d="M 20 180 Q 50 180 100 150 Q 150 50 220 50 L 220 180 L 20 180 Z" fill="#22d3ee" opacity="0.3" />
                                    
                                    <!-- The Bell Curve (t-distribution) -->
                                    <path d="M 20 180 Q 50 180 100 150 Q 200 20 300 150 Q 350 180 380 180" 
                                          stroke="#22d3ee" fill="none" stroke-width="3" />
                                    
                                    <!-- X-Axis -->
                                    <line x1="10" y1="180" x2="390" y2="180" stroke="white" stroke-width="1" />
                                    
                                    <!-- Tick Marks & Labels -->
                                    <g font-size="9" fill="white" opacity="0.6" text-anchor="middle">
                                        <text x="200" y="195">0</text>
                                        <text x="143" y="195">-1</text>
                                        <text x="257" y="195">1</text>
                                        <text x="314" y="195">2</text>
                                    </g>

                                    <!-- Indicator for t = 0.531 -->
                                    <line x1="230" y1="180" x2="230" y2="60" stroke="#fbbf24" stroke-width="2" stroke-dasharray="3" />
                                    <text x="230" y="55" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">t = 0.531</text>
                                    
                                    <text x="120" y="130" fill="cyan" font-size="10" font-weight="bold" text-anchor="middle">p-value area (0.696)</text>
                                </svg>
                            </div>
                            <p class="text-center text-[10px] font-mono mt-4 opacity-30 italic">Graph visualized for $H_a: \\mu < 1l$ (Left-tailed cumulative area)</p>
                        </div>
                    </section>

                   <!-- 3. F-TEST (Slide 11 - Fully Detailed) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 11</span>
                            <h3 class="text-2xl font-extrabold text-accent">Hypothesis Testing: F-test</h3>
                        </div>

                        <!-- Formal Setup -->
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                            <div class="space-y-4">
                                <div>
                                    <h4 class="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Assumptions & Populations</h4>
                                    <ul class="list-disc ml-5 text-sm space-y-2 text-gray-300">
                                        <li>Consider two independent normal populations:</li>
                                        <li>$X_1 \\sim \\text{normal}(\\mu_1, \\sigma_1^2)$</li>
                                        <li>$X_2 \\sim \\text{normal}(\\mu_2, \\sigma_2^2)$</li>
                                        <li>Random samples are taken from both: $x_1, x_2, \\dots, x_n$</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 class="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Hypotheses</h4>
                                    <div class="bg-black/40 p-4 rounded-lg border border-white/5 space-y-2">
                                        <p class="text-sm">We test if the variances are equal:</p>
                                        <p class="text-white font-semibold">$H_0: \\sigma_1^2 = \\sigma_2^2$</p>
                                        <p class="text-white font-semibold">$H_a: \\sigma_1^2 > \\sigma_2^2$ <span class="text-gray-500 font-normal">(One-tailed)</span></p>
                                    </div>
                                </div>
                            </div>

                            <!-- Statistic & Degrees of Freedom -->
                            <div class="bg-white/5 p-5 rounded-xl border border-white/10">
                                <h4 class="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 text-center">Test Statistic & Distribution</h4>
                                <div class="space-y-4 text-sm">
                                    <div class="bg-black/40 p-3 rounded text-center">
                                        <p class="text-[10px] text-accent uppercase mb-1">Calculated F-ratio ($f^*$)</p>
                                        <div class="text-xl font-bold">$$f^* = \\frac{s_1^2}{s_2^2}$$</div>
                                    </div>
                                    <div class="text-center">
                                        <p>If $H_0$ is true, the statistic follows the F-distribution:</p>
                                        <p class="text-lg text-white font-mono mt-1">$F^* \\sim F(n_1 - 1, n_2 - 1)$</p>
                                    </div>
                                    <div class="bg-accent/10 p-3 rounded-lg border border-accent/20">
                                        <p class="font-bold text-accent mb-1 text-xs uppercase text-center">p-value:</p>
                                        <div class="text-center font-mono text-lg">$$P(F^* > f^*)$$</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- F-Distribution Graph -->
                        <div class="mt-8">
                            <h4 class="text-center text-xs font-bold uppercase tracking-widest text-white/30 mb-6">F-Distribution Curve (Positively Skewed)</h4>
                            <div class="relative w-full max-w-2xl mx-auto bg-black/20 p-8 rounded-xl border border-white/5">
                                <svg viewBox="0 0 400 200" class="w-full h-auto overflow-visible">
                                    <!-- Shaded p-value region (Upper Tail) -->
                                    <path d="M 280 145 Q 320 175 380 178 L 380 180 L 280 180 Z" fill="#ef4444" opacity="0.6" />
                                    
                                    <!-- F-Distribution Curve (Asymmetric/Skewed) -->
                                    <path d="M 10 180 L 20 175 C 40 100 80 20 120 60 C 180 120 300 175 390 180" 
                                          stroke="#fbbf24" fill="none" stroke-width="3" />
                                    
                                    <!-- X and Y Axes -->
                                    <line x1="10" y1="180" x2="390" y2="180" stroke="white" stroke-width="1" />
                                    <line x1="10" y1="180" x2="10" y2="20" stroke="white" stroke-width="1" opacity="0.3" />
                                    
                                    <!-- Tick Marks & Labels -->
                                    <g font-size="9" fill="white" opacity="0.6" text-anchor="middle">
                                        <text x="10" y="195">0</text>
                                        <text x="110" y="195">1</text>
                                        <text x="210" y="195">2</text>
                                        <text x="310" y="195">3</text>
                                    </g>

                                    <!-- Indicator for f* -->
                                    <line x1="280" y1="180" x2="280" y2="145" stroke="#ef4444" stroke-width="2" stroke-dasharray="3" />
                                    <text x="280" y="135" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">Calculated f*</text>
                                    
                                    <text x="340" y="165" fill="#ef4444" font-size="9" text-anchor="middle">p-value</text>
                                </svg>
                                
                                <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px] opacity-70 italic">
                                    <p>• Unlike Z or T, the F-distribution is <strong>not symmetric</strong>.</p>
                                    <p>• It is always positive (starts at 0) and is skewed to the right.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Technical Summary -->
                        <div class="mt-8 p-4 bg-white/5 rounded-lg border border-white/10 text-sm">
                            <h4 class="font-bold text-accent mb-2">Calculation Note:</h4>
                            <p class="text-gray-300">
                                When performing a two-tailed test for variances ($H_a: \\sigma_1^2 \\neq \\sigma_2^2$), it is standard practice to place the larger sample variance in the numerator so that $f^* > 1$. The degrees of freedom are always $(n_{\\text{num}}-1, n_{\\text{den}}-1)$.
                            </p>
                        </div>
                    </section>

                    <!-- EXTERNAL LINK BUTTON -->
                    <div class="pt-10 border-t border-white/10">
                        <a href="https://sta1000.vercel.app/" target="_blank" 
                           class="flex items-center justify-center gap-3 w-full bg-accent hover:bg-white text-black font-black py-5 rounded-2xl transition-all transform hover:scale-[1.01] shadow-xl group">
                            <span class="text-lg uppercase tracking-widest">Open STA1000 Analysis Tool</span>
                            <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </a>
                    </div>

                </div>
            `
        },
        'intro-hurdles': {
            title: 'Notation & Practical Hurdles',
            html: `
                <div class="space-y-12">
                    
                    <!-- 1. MATHEMATICAL NOTATION (Slide 19) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 19</span>
                            <h3 class="text-xl font-bold text-accent">Mathematical Notation</h3>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <!-- Summation -->
                            <div class="bg-black/30 p-5 rounded-lg border border-white/5">
                                <h4 class="text-xs font-bold text-accent uppercase mb-4 text-center">Summation</h4>
                                <div class="text-2xl text-center py-4">
                                    $$\\sum_{i=1}^{n} x_i$$
                                </div>
                                <p class="text-[10px] text-gray-500 text-center italic">The sum of all observations from 1 to $n$.</p>
                            </div>

                            <!-- Weighted Mean -->
                            <div class="bg-black/30 p-5 rounded-lg border border-white/5">
                                <h4 class="text-xs font-bold text-accent uppercase mb-4 text-center">Weighted Mean</h4>
                                <div class="text-xl text-center py-4">
                                    $$\\bar{x}_j = \\frac{\\sum_{i=1}^{n} w_i x_{ij}}{\\sum_{i=1}^{n} w_i}$$
                                </div>
                                <p class="text-[10px] text-gray-500 text-center italic">Used when certain observations ($w_i$) carry more importance.</p>
                            </div>
                        </div>
                    </section>

                    <!-- 2. PRACTICAL HURDLES (Slide 20) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 20</span>
                            <h3 class="text-xl font-bold text-accent">Practical Hurdles in Analysis</h3>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                            <div class="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                                <h5 class="font-bold text-red-200 text-sm">Missing Data</h5>
                                <p class="text-xs text-gray-400 mt-1">Leads to incomplete matrices and requires imputation or deletion.</p>
                            </div>
                            <div class="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                                <h5 class="font-bold text-orange-200 text-sm">Biased Results</h5>
                                <p class="text-xs text-gray-400 mt-1">Non-random missingness or outliers can skew statistical conclusions.</p>
                            </div>
                            <div class="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                                <h5 class="font-bold text-blue-200 text-sm">Sample Size</h5>
                                <p class="text-xs text-gray-400 mt-1">Multivariate techniques often require large $n$ to ensure stable covariance matrices.</p>
                            </div>
                        </div>

                        <!-- TRANSFORMATIONS & HISTOGRAMS -->
                        <div class="space-y-6">
                            <h4 class="text-lg font-bold text-white border-b border-white/10 pb-2">Data Transformations</h4>
                            <p class="text-sm text-gray-300">Transformations (like $\\sqrt{x}$ or $\\log{x}$) are used to reduce skewness and make data more "normal" for hypothesis testing.</p>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                                <!-- Raw Data Histogram -->
                                <div class="bg-black/20 p-4 rounded-xl border border-white/5">
                                    <h5 class="text-[10px] font-bold uppercase text-center mb-4 text-red-400">Histogram of Raw Data (Skewed)</h5>
                                    <svg viewBox="0 0 200 120" class="w-full h-auto overflow-visible">
                                        <!-- Axis -->
                                        <line x1="20" y1="100" x2="180" y2="100" stroke="white" opacity="0.3" />
                                        <line x1="20" y1="100" x2="20" y2="10" stroke="white" opacity="0.3" />
                                        <!-- Bars (Skewed Right) -->
                                        <rect x="25" y="20" width="15" height="80" fill="#E11D48" opacity="0.8" />
                                        <rect x="42" y="30" width="15" height="70" fill="#E11D48" opacity="0.8" />
                                        <rect x="59" y="55" width="15" height="45" fill="#E11D48" opacity="0.8" />
                                        <rect x="76" y="75" width="15" height="25" fill="#E11D48" opacity="0.8" />
                                        <rect x="93" y="85" width="15" height="15" fill="#E11D48" opacity="0.8" />
                                        <rect x="110" y="92" width="15" height="8" fill="#E11D48" opacity="0.8" />
                                        <!-- Label -->
                                        <text x="100" y="115" fill="white" font-size="8" text-anchor="middle" opacity="0.5">Value (x)</text>
                                    </svg>
                                </div>

                                <!-- Transformed Data Histogram -->
                                <div class="bg-black/20 p-4 rounded-xl border border-white/5">
                                    <h5 class="text-[10px] font-bold uppercase text-center mb-4 text-cyan-400">Histogram of $\\sqrt{\\text{data}}$ (Symmetric)</h5>
                                    <svg viewBox="0 0 200 120" class="w-full h-auto overflow-visible">
                                        <!-- Axis -->
                                        <line x1="20" y1="100" x2="180" y2="100" stroke="white" opacity="0.3" />
                                        <line x1="20" y1="100" x2="20" y2="10" stroke="white" opacity="0.3" />
                                        <!-- Bars (Normal/Symmetric) -->
                                        <rect x="30" y="85" width="15" height="15" fill="#22d3ee" opacity="0.8" />
                                        <rect x="47" y="65" width="15" height="35" fill="#22d3ee" opacity="0.8" />
                                        <rect x="64" y="40" width="15" height="60" fill="#22d3ee" opacity="0.8" />
                                        <rect x="81" y="25" width="15" height="75" fill="#22d3ee" opacity="0.8" />
                                        <rect x="98" y="45" width="15" height="55" fill="#22d3ee" opacity="0.8" />
                                        <rect x="115" y="75" width="15" height="25" fill="#22d3ee" opacity="0.8" />
                                        <!-- Label -->
                                        <text x="100" y="115" fill="white" font-size="8" text-anchor="middle" opacity="0.5">Value ($\sqrt{x}$)</text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            `
        }
    }
};