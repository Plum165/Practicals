// pca.js
export const pcaModule = {
    id: 'pca',
    title: 'Singular Value Decomposition (SVD) & PCA',
    subtopics: [
        { id: 'svd-theory', title: '1. SVD: Mathematical Definition' },
        { id: 'svd-values', title: '2. Singular Values & Matrix D' },
        { id: 'svd-diagonal', title: '3. The Diagonal Matrix & Singular Values' },
        { id: 'svd-r-scaling', title: '3. SVD in R: Scaling & Correlation' },
        { id: 'svd-r-logic', title: '4. SVD in R: Scaling & Plotting' },
        { id: 'svd-r-output', title: '5. SVD R Output (U, D, V)' },
{ id: 'svd-ex1', title: '6. Ex 1: Reconstructing z_81' },
{ id: 'svd-ex2', title: '7. Ex 2: Reconstructing z_52' },
{ id: 'svd-three-var', title: '8. Three Variable Case Setup' },
        
        { id: 'svd-r-impl', title: '9. SVD Implementation in R' },
        { id: 'svd-reconstruct', title: '10. Reconstructing Data Values' },
        { id: 'svd-approx', title: '11. Data Approximation & Unstandardizing' }
    ],
    content: {
        'svd-theory': {
            title: 'Mathematical Definition of SVD',
            html: `
                <div class="space-y-8">
                    <!-- DIMENSIONS & MATRICES SECTION -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 3</span>
                            <h3 class="text-xl font-bold text-accent">Matrix Components</h3>
                        </div>
                        
                        <p class="text-sm text-gray-300 mb-6">
                            Any matrix $\\mathbf{X}_{n \\times p}$ can be decomposed into the product of three specific matrices: 
                            <strong class="text-white font-mono ml-2">X = UDV'</strong>
                        </p>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            <div class="bg-black/40 p-4 rounded-lg border border-white/5">
                                <p class="text-accent font-bold text-xs mb-1">Matrix U</p>
                                <p class="text-white font-mono text-sm mb-1">$n \\times p$</p>
                                <p class="text-[10px] text-gray-400">Left singular vectors.</p>
                            </div>
                            <div class="bg-black/40 p-4 rounded-lg border border-white/5">
                                <p class="text-accent font-bold text-xs mb-1">Matrix D</p>
                                <p class="text-white font-mono text-sm mb-1">$\\min(n,p)$</p>
                                <p class="text-[10px] text-gray-400">Diagonal matrix (0's in off-diagonals).</p>
                            </div>
                            <div class="bg-black/40 p-4 rounded-lg border border-white/5">
                                <p class="text-accent font-bold text-xs mb-1">Matrix V</p>
                                <p class="text-white font-mono text-sm mb-1">$p \\times p$</p>
                                <p class="text-[10px] text-gray-400">Right singular vectors.</p>
                            </div>
                        </div>
                    </section>

                    <!-- ELEMENT-WISE FORMULA SECTION -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <h4 class="text-accent font-bold mb-4 uppercase text-xs tracking-widest">Element-Wise Reconstruction</h4>
                        <p class="text-sm text-gray-300 mb-6 leading-relaxed">
                            Every single element $x_{ij}$ in the original matrix can be calculated using the following summation of singular values and singular vectors:
                        </p>

                        <div class="bg-black/60 p-8 rounded-2xl border border-accent/20 text-center relative overflow-hidden">
                            <!-- Summation Formula -->
                            <div class="text-2xl md:text-3xl font-bold text-white">
                                $$x_{ij} = \\sum_{k=1}^{\\min(n,p)} d_k u_{ik} v_{jk}$$
                            </div>
                            
                            <div class="mt-6 flex justify-center gap-8 text-[10px] uppercase tracking-tighter opacity-50">
                                <span>$d_k$: Singular Value</span>
                                <span>$u_{ik}$: Entry in U</span>
                                <span>$v_{jk}$: Entry in V</span>
                            </div>
                        </div>

                        <div class="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-200">
                            <strong>Note:</strong> This summation allows us to reconstruct the exact data point or an approximation if we sum only up to $q$ values (where $q < p$).
                        </div>
                    </section>
                </div>
            `
        },

        'svd-diagonal': {
            title: 'Singular Values & Matrix D',
            html: `
                <div class="space-y-10">
                    <!-- 1. DIMENSION LOGIC (Slide 4) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 4</span>
                            <h3 class="text-xl font-bold text-accent">Determining Diagonal Entries</h3>
                        </div>
                        <p class="text-sm text-gray-300 leading-relaxed mb-4">
                            The number of singular values in matrix $\\mathbf{D}$ is determined by $\\min(n, p)$. 
                        </p>
                        <div class="bg-black/40 p-4 rounded-lg border border-white/5 inline-block">
                            <p class="text-xs text-gray-400 italic">Example: If $\\mathbf{X}$ is a $5 \\times 3$ matrix...</p>
                            <p class="text-white font-mono mt-1">$\\min(5, 3) = 3$ diagonal values ($d_1, d_2, d_3$)</p>
                        </div>
                    </section>

                    <!-- 2. FORMAL MATRIX REPRESENTATION -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg text-center">
                        <h4 class="text-xs font-bold text-white/40 uppercase tracking-widest mb-8">General SVD Structure</h4>
                        <div class="text-lg md:text-xl text-white">
                            $$\\mathbf{X} = \\mathbf{U} \\times \\begin{bmatrix} d_1 & 0 & 0 \\\\\\\\ 0 & d_2 & 0 \\\\\\\\ 0 & 0 & d_3 \\end{bmatrix} \\times \\mathbf{V}'$$
                        </div>
                    </section>

                    <!-- 3. NUMERICAL WORKED EXAMPLE (Slide 4) -->
                    <section class="bg-black/40 p-8 rounded-2xl border border-white/10 shadow-xl overflow-x-auto">
                        <h4 class="text-accent font-bold mb-6 uppercase text-xs tracking-widest text-center">Standardised Data Example</h4>
                        <div class="flex flex-col md:flex-row items-center justify-center gap-4 text-[11px] md:text-sm">
                            <!-- Left: Standardised X -->
                            <div class="text-center">
                                <p class="mb-2 opacity-50">Standardised $\\mathbf{X}$</p>
                                $$\\begin{bmatrix} 
                                -0.681 & -1.403 & 0.185 \\\\\\\\ 
                                -0.705 & 1.228 & -1.125 \\\\\\\\ 
                                0.019 & 0.351 & -0.432 \\\\\\\\ 
                                -0.343 & 0.351 & -0.200 \\\\\\\\ 
                                1.709 & -0.526 & 1.572 
                                \\end{bmatrix}$$
                            </div>

                            <div class="text-2xl text-accent font-black">=</div>

                            <!-- Middle: U and D -->
                            <div class="text-center">
                                <p class="mb-2 opacity-50">Matrix $\\mathbf{U} \\times \\mathbf{D}$</p>
                                $$\\mathbf{U} \\times \\begin{bmatrix} 2.971 & 0 & 0 \\\\\\\\ 0 & 1.762 & 0 \\\\\\\\ 0 & 0 & 0.266 \\end{bmatrix} \\times \\mathbf{V}'$$
                            </div>
                        </div>
                    </section>

                    <!-- 4. PROPERTIES OF SINGULAR VALUES -->
                    <section class="bg-accent/5 p-6 rounded-xl border border-accent/20">
                        <h4 class="text-white font-bold mb-4 uppercase text-xs tracking-widest">Properties of Singular Values ($d_i$)</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ul class="space-y-4 text-sm text-gray-300">
                                <li class="flex items-start gap-3">
                                    <span class="w-5 h-5 bg-accent text-black rounded flex items-center justify-center font-bold text-[10px] mt-0.5">1</span>
                                    <p>Singular values are <strong>always non-negative</strong> ($d_i \\ge 0$).</p>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="w-5 h-5 bg-accent text-black rounded flex items-center justify-center font-bold text-[10px] mt-0.5">2</span>
                                    <p>They are always arranged in <strong>decreasing order</strong> ($d_1 > d_2 > \\dots > d_k$).</p>
                                </li>
                            </ul>
                            
                            <div class="bg-black/60 p-4 rounded-lg border border-white/5 flex flex-col justify-center">
                                <p class="text-[10px] text-white/40 uppercase mb-2">Example Ordering:</p>
                                <p class="text-lg font-mono text-accent">$2.971 > 1.762 > 0.266$</p>
                            </div>
                        </div>
                    </section>
                </div>
            `
        },

        'svd-values': {
            title: 'Singular Values & Matrix D',
            html: `
                <div class="space-y-8">
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <h4 class="text-accent font-bold mb-4 uppercase text-xs">The Diagonal Matrix (D)</h4>
                        <p class="text-sm text-gray-300 mb-6">
                            The values in $\\mathbf{D}$ are called <strong>singular values</strong>. They are always non-negative and arranged in decreasing order ($d_1 > d_2 > \\dots > d_p$).
                        </p>

                        <div class="bg-black/40 p-5 rounded-lg border border-white/5 font-mono text-sm text-center">
                            $$\\mathbf{D} = \\begin{bmatrix} d_1 & 0 & 0 \\\\ 0 & d_2 & 0 \\\\ 0 & 0 & d_3 \\end{bmatrix}$$
                        </div>

                        <div class="mt-8 p-4 bg-blue-500/10 border-l-4 border-blue-500 rounded text-sm">
                            <h5 class="font-bold text-blue-300 mb-1 text-xs uppercase">Example (Slide 4):</h5>
                            <p class="text-gray-300">$d_1 = 2.971 > d_2 = 1.762 > d_3 = 0.266$</p>
                        </div>
                    </section>
                </div>
            `
        },

        'svd-r-impl': {
            title: 'SVD in R: Pre-processing',
            html: `
                <div class="space-y-8">
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <h4 class="text-accent font-bold mb-4">Standardization Requirement</h4>
                        <p class="text-sm text-gray-300 leading-relaxed mb-6">
                            In Multivariate Analysis, the data matrix $\\mathbf{X}$ usually <strong>needs to be scaled (standardised)</strong> before performing SVD.
                        </p>
                        
                        <div class="bg-black/60 p-5 rounded-xl border border-white/10 font-mono text-[11px] space-y-4">
                            <div>
                                <p class="text-cyan-400"># 1. Scale the data</p>
                                <p class="text-white">scaled_data = scale(data2X)</p>
                            </div>
                            <div>
                                <p class="text-cyan-400"># 2. Perform SVD</p>
                                <p class="text-white">svd_result = svd(scaled_data)</p>
                            </div>
                            <div>
                                <p class="text-cyan-400"># 3. View singular values (d)</p>
                                <p class="text-white">svd_result$d</p>
                                <p class="text-white/40">[1] 4.6096252 0.8668074</p>
                            </div>
                        </div>
                    </section>
                </div>
            `
        },

        'svd-reconstruct': {
            title: 'Reconstructing Individual Values',
            html: `
                <div class="space-y-8">
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <h4 class="text-accent font-bold mb-4">Reconstruction Formula</h4>
                        <p class="text-sm text-gray-300 mb-6">We can calculate any specific element $z_{ij}$ of the standardized matrix using the summation:</p>
                        
                        <div class="bg-black/40 p-6 rounded-xl text-center text-xl mb-8">
                            $$z_{ij} = \\sum_{k=1}^{\\min(n,p)} d_k u_{ik} v_{jk}$$
                        </div>

                        <div class="bg-accent/5 p-5 rounded-xl border border-accent/20">
                            <h5 class="text-white font-bold text-xs uppercase mb-4 tracking-widest text-center">Worked Example: $z_{81}$ (Slide 9)</h5>
                            <p class="text-[11px] text-gray-400 mb-4 text-center">8th value of 1st variable ($i=8, j=1$)</p>
                            <div class="bg-black/40 p-4 rounded font-mono text-xs space-y-2">
                                <p>$z_{81} = d_1 u_{81} v_{11} + d_2 u_{82} v_{12}$</p>
                                <p>$z_{81} = (4.609 \\times 0.417 \\times -0.707) + (0.866 \\times 0.1236 \\times -0.707)$</p>
                                <p class="text-accent font-bold text-sm underline">$z_{81} = -1.436$</p>
                            </div>
                        </div>
                    </section>
                </div>
            `
        },

        'svd-r-logic': {
            title: 'SVD in R: Implementation & Visualisation',
            html: `
                <div class="space-y-10">
                    <!-- 1. DATA PREPARATION (Slide 5-6) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 6</span>
                            <h3 class="text-xl font-bold text-accent">Standardization with <code>scale()</code></h3>
                        </div>
                        <p class="text-sm text-gray-300 leading-relaxed mb-6">
                            Before performing SVD, the data matrix $\\mathbf{X}$ must be <strong>standardised</strong>. This ensures that variables with larger variances do not dominate the decomposition.
                        </p>
                        
                        <div class="bg-black/60 p-5 rounded-xl border border-white/10 font-mono text-[11px] space-y-4">
                            <div>
                                <p class="text-white/40"># Check function documentation</p>
                                <p class="text-cyan-400">> help(scale)</p>
                            </div>
                            <div>
                                <p class="text-white/40"># Standardise the data (Mean=0, SD=1)</p>
                                <p class="text-cyan-400">> data_standardised = scale(data2X)</p>
                            </div>
                        </div>
                    </section>

                    <!-- 2. VISUALISING THE EFFECT (Slide 7) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <h4 class="text-accent font-bold mb-6 uppercase text-xs tracking-widest">Raw vs. Standardised Visualisation</h4>
                        <div class="text-xs text-blue-200 italic leading-loose">
    <strong>R code:</strong><br>
    <span class="font-mono">> plot(x1, x2, pch = 16, cex = 1.3, col = "blue", main = "x2 vs x1", xlab = "x1", ylab = "x2")</span><br>
    <span class="font-mono">> plot(scale(x1), scale(x2), pch = 16, cex = 1.3, col = "blue", main = "z2 vs z1", xlab = "z1", ylab = "z2")</span>
</div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <!-- Raw Plot -->
                            <div class="bg-black/20 p-4 rounded-xl border border-white/5 text-center">
                                <p class="text-[10px] text-white/40 mb-4 font-mono">plot(x1, x2, main="x2 vs x1")</p>
                                <svg viewBox="0 0 200 160" class="w-full h-auto opacity-80">
                                    <line x1="30" y1="130" x2="180" y2="130" stroke="white" stroke-width="1" />
                                    <line x1="30" y1="130" x2="30" y2="20" stroke="white" stroke-width="1" />
                                    <!-- Points clustered in higher range -->
                                    <circle cx="60" cy="110" r="3" fill="#3b82f6" />
                                    <circle cx="90" cy="80" r="3" fill="#3b82f6" />
                                    <circle cx="120" cy="60" r="3" fill="#3b82f6" />
                                    <circle cx="150" cy="40" r="3" fill="#3b82f6" />
                                    <text x="105" y="145" fill="white" font-size="9">Raw (x1)</text>
                                </svg>
                                <p class="text-[10px] text-gray-500 mt-2 italic">Axes: Original Units</p>
                            </div>

                            <!-- Standardised Plot -->
                            <div class="bg-black/20 p-4 rounded-xl border border-white/5 text-center">
                                <p class="text-[10px] text-white/40 mb-4 font-mono">plot(scale(x1), scale(x2), main="z2 vs z1")</p>
                                <svg viewBox="0 0 200 160" class="w-full h-auto opacity-80">
                                    <!-- Center Axis (0,0) -->
                                    <line x1="20" y1="80" x2="180" y2="80" stroke="white" opacity="0.3" stroke-dasharray="2" />
                                    <line x1="100" y1="140" x2="100" y2="20" stroke="white" opacity="0.3" stroke-dasharray="2" />
                                    <line x1="30" y1="130" x2="180" y2="130" stroke="white" stroke-width="1" />
                                    <line x1="30" y1="130" x2="30" y2="20" stroke="white" stroke-width="1" />
                                    <!-- Same pattern, centered at 0 -->
                                    <circle cx="60" cy="100" r="3" fill="#22d3ee" />
                                    <circle cx="85" cy="85" r="3" fill="#22d3ee" />
                                    <circle cx="115" cy="75" r="3" fill="#22d3ee" />
                                    <circle cx="140" cy="60" r="3" fill="#22d3ee" />
                                    <text x="105" y="145" fill="white" font-size="9">Scaled (z1)</text>
                                </svg>
                                <p class="text-[10px] text-gray-500 mt-2 italic">Axes: Standard Deviations from Mean (0)</p>
                            </div>
                        </div>
                    </section>

                    <!-- 3. COMPUTING SVD (Slide 8) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">CALCULATION</span>
                            <h3 class="text-xl font-bold text-accent">The SVD Identity</h3>
                        </div>
                        <p class="text-sm text-gray-300 mb-6">
                            In R, the <code>svd()</code> function returns the components needed to satisfy the identity for the standardised matrix $\\mathbf{Z}_{12 \\times 2}$:
                        </p>

                        <div class="bg-black/60 p-8 rounded-2xl border border-accent/20 text-center">
                            <div class="text-xl md:text-2xl font-mono text-white mb-6">
                                $$\\mathbf{Z} = \\mathbf{UDV}' = \\mathbf{U} \\times \\begin{bmatrix} d_1 & 0 \\\\\\\\ 0 & d_2 \\end{bmatrix} \\times \\mathbf{V}'$$
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div class="p-2 bg-white/5 rounded border border-white/10">
                                    <p class="text-[10px] text-accent uppercase font-bold mb-1">In R</p>
                                    <p class="text-xs font-mono text-white">svd(X)$u</p>
                                </div>
                                <div class="p-2 bg-white/5 rounded border border-white/10">
                                    <p class="text-[10px] text-accent uppercase font-bold mb-1">In R</p>
                                    <p class="text-xs font-mono text-white">diag(svd(X)$d)</p>
                                </div>
                                <div class="p-2 bg-white/5 rounded border border-white/10">
                                    <p class="text-[10px] text-accent uppercase font-bold mb-1">In R</p>
                                    <p class="text-xs font-mono text-white">svd(X)$v</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            `
        },

        'svd-r-scaling': {
            title: 'SVD in R: Data Scaling & Correlation',
            html: `
                <div class="space-y-10">
                    <!-- 1. RAW DATA & CORRELATION (Slide 5) -->
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 5</span>
                            <h3 class="text-xl font-bold text-accent">Raw Data & Correlation Check</h3>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                            <!-- Raw Table -->
                            <div class="bg-black/30 p-4 rounded-lg border border-white/5">
                                <p class="text-[10px] text-white/40 uppercase mb-3 font-mono">> data2X</p>
                                <table class="w-full text-center text-[10px] font-mono border-collapse">
                                    <thead class="text-accent border-b border-white/10">
                                        <tr><th class="p-1">Row</th><th class="p-1">x1</th><th class="p-1">x2</th></tr>
                                    </thead>
                                    <tbody class="text-gray-400">
                                        <tr><td>1</td><td>8</td><td>1</td></tr>
                                        <tr><td>2</td><td>5</td><td>5</td></tr>
                                        <tr><td>3</td><td>4</td><td>5</td></tr>
                                        <tr><td>4</td><td>8</td><td>2</td></tr>
                                        <tr><td>5</td><td>7</td><td>4</td></tr>
                                        <tr><td>6</td><td>4</td><td>7</td></tr>
                                        <tr><td>...</td><td>...</td><td>...</td></tr>
                                        <tr><td>12</td><td>6</td><td>5</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <!-- Correlation Matrix -->
                            <div class="space-y-6">
                                <div class="bg-black/40 p-4 rounded-lg border border-white/10">
                                    <p class="text-[10px] text-white/40 uppercase mb-3 font-mono">> cor(data2X)</p>
                                    <table class="w-full text-center text-xs font-mono">
                                        <thead class="text-white/60">
                                            <tr><th></th><th>x1</th><th>x2</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr class="border-b border-white/5">
                                                <td class="text-white/60">x1</td><td>1.0000</td><td class="bg-red-500/20 text-red-400">-0.9317</td>
                                            </tr>
                                            <tr>
                                                <td class="text-white/60">x2</td><td class="bg-red-500/20 text-red-400">-0.9317</td><td>1.0000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="p-3 bg-red-500/10 border-l-4 border-red-500 rounded text-red-200 text-xs font-bold animate-pulse">
                                    "High correlation between x1 and x2 detected (-0.93)!"
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- 2. SCALING PROCESS DIAGRAM (Slide 5 Diagram) -->
                    <section class="flex flex-col md:flex-row items-center justify-center gap-6 py-8">
                        <!-- Data Box -->
                        <div class="w-40 h-24 bg-blue-500/20 border-2 border-blue-500/50 rounded-lg flex items-center justify-center text-center p-2 shadow-lg">
                            <span class="text-xs font-bold text-blue-200">Raw Data Matrix (X)</span>
                        </div>

                        <!-- Animated Arrow -->
                        <div class="relative flex items-center justify-center">
                            <svg width="100" height="40" viewBox="0 0 100 40" class="hidden md:block">
                                <path d="M 0 20 L 80 20" stroke="#22c55e" stroke-width="4" fill="none" stroke-linecap="round" />
                                <path d="M 70 10 L 90 20 L 70 30" fill="#22c55e" />
                            </svg>
                            <span class="md:hidden text-2xl text-green-500">↓</span>
                        </div>

                        <!-- Process Box -->
                        <div class="w-64 h-32 bg-green-600/40 border-2 border-green-500 rounded-xl flex items-center justify-center text-center p-4 shadow-2xl relative overflow-hidden group">
                            <div class="absolute inset-0 bg-white/5 group-hover:scale-110 transition-transform duration-700"></div>
                            <span class="relative z-10 text-xs font-black text-white leading-tight uppercase tracking-widest">
                                X Data Matrix <br> <span class="text-green-300">Needs to be Scaled</span> <br> (Standardised)
                            </span>
                        </div>
                    </section>

                   <div class="space-y-6">
                    <p class="text-sm text-gray-300 leading-relaxed">
                        The full standardised matrix $\\mathbf{Z}$ where $z_{ij} = \\frac{x_{ij} - \\bar{x}_j}{s_j}$. These values are used as the input for SVD.
                    </p>

                    <div class="bg-black/60 p-6 rounded-xl border border-white/10 font-mono text-[11px] leading-tight shadow-2xl">
                        <p class="text-cyan-400 mb-4">> round(scale(data2X), 3)</p>
                        
                        <div class="overflow-x-auto">
                            <table class="w-full text-left border-collapse">
                                <thead class="text-white/40 border-b border-white/10">
                                    <tr>
                                        <th class="py-1 px-2">Row</th>
                                        <th class="py-1 px-2">x1 ($z_1$)</th>
                                        <th class="py-1 px-2">x2 ($z_2$)</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-300">
                                    <tr class="border-b border-white/5"><td>[1,]</td><td class="text-white">1.436</td><td class="text-red-400">-1.713</td></tr>
                                    <tr class="border-b border-white/5"><td>[2,]</td><td>0.000</td><td>0.000</td></tr>
                                    <tr class="border-b border-white/5"><td>[3,]</td><td class="text-red-400">-0.479</td><td>0.000</td></tr>
                                    <tr class="border-b border-white/5"><td>[4,]</td><td class="text-white">1.436</td><td class="text-red-400">-1.285</td></tr>
                                    <tr class="border-b border-white/5"><td>[5,]</td><td class="text-white">0.957</td><td class="text-red-400">-0.428</td></tr>
                                    <tr class="border-b border-white/5"><td>[6,]</td><td class="text-red-400">-0.479</td><td class="text-white">0.856</td></tr>
                                    <tr class="border-b border-white/5"><td>[7,]</td><td>0.000</td><td>0.000</td></tr>
                                    <tr class="border-b border-white/5"><td>[8,]</td><td class="text-red-400">-1.436</td><td class="text-white">1.285</td></tr>
                                    <tr class="border-b border-white/5"><td>[9,]</td><td class="text-white">0.479</td><td class="text-red-400">-0.856</td></tr>
                                    <tr class="border-b border-white/5"><td>[10,]</td><td class="text-red-400">-0.957</td><td class="text-white">0.428</td></tr>
                                    <tr class="border-b border-white/5"><td>[11,]</td><td class="text-red-400">-1.436</td><td class="text-white">1.713</td></tr>
                                    <tr class="border-b border-white/10"><td>[12,]</td><td class="text-white">0.479</td><td>0.000</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- Metadata Attributes -->
                        <div class="mt-6 pt-4 border-t border-white/10 space-y-4">
                            <div>
                                <p class="text-accent text-[9px] uppercase font-bold tracking-widest mb-1">attr(,"scaled:center") [Group Means]</p>
                                <div class="grid grid-cols-2 gap-4 text-white text-xs">
                                    <p>x1: 5.0</p>
                                    <p>x2: 5.0</p>
                                </div>
                            </div>
                            <div>
                                <p class="text-accent text-[9px] uppercase font-bold tracking-widest mb-1">attr(,"scaled:scale") [Group Std Devs]</p>
                                <div class="grid grid-cols-2 gap-4 text-white text-xs">
                                    <p>x1: 2.088932</p>
                                    <p>x2: 2.335497</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                        <p class="text-xs text-blue-200 italic">
                            <strong>Exam Tip:</strong> Notice that rows [2,] and [7,] have $z$-scores of (0, 0). This means the original raw values for these cases were exactly equal to the mean (5, 5).
                        </p>
                    </div>
                </div>
            `
        },

        'svd-approx': {
            title: 'Approximation & Unstandardizing',
            html: `
                <div class="space-y-8">
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <h4 class="text-accent font-bold mb-4">Data Approximation</h4>
                        <p class="text-sm text-gray-300 mb-4">We can approximate values using only the first $q$ singular values ($q < p$):</p>
                        <div class="bg-black/40 p-4 rounded text-center text-lg">
                            $$x_{ij}^* \\approx \\sum_{k=1}^{q} d_k u_{ik} v_{jk}$$
                        </div>
                    </section>

                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <h4 class="text-accent font-bold mb-4">Unstandardizing the Value</h4>
                        <p class="text-sm text-gray-300 mb-4">To return the approximated standardized value ($z_{ij}^*$) to its original units ($x_{ij}^*$):</p>
                        
                        <div class="bg-black/40 p-6 rounded-xl text-center text-lg mb-6">
                            $$x_{ij}^* = \\sigma_{xj} \\times (z_{ij}^*) + \\bar{x}_j$$
                        </div>

                        <div class="bg-blue-900/20 p-5 rounded-xl border border-blue-500/30">
                            <h5 class="text-blue-300 font-bold text-xs uppercase mb-3 text-center">Worked Example (Slide 14)</h5>
                            <div class="text-[11px] font-mono space-y-2 text-gray-300">
                                <p>1. Approx standardized value: <span class="text-white">-0.8667</span></p>
                                <p>2. Variable 3 Std Dev: $sd(X_3)$</p>
                                <p>3. Variable 3 Mean: $mean(X_3)$</p>
                                <p class="text-accent font-bold text-sm">Approximated original $x_{12,3} = 2.975$</p>
                            </div>
                        </div>
                    </section>
                </div>
            `
        },
        'svd-r-output': {
            title: 'SVD R Output: The Three Matrices',
            html: `
                <div class="space-y-8">
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 8</span>
                            <h3 class="text-xl font-bold text-accent">Extracting U, D, and V</h3>
                        </div>
                        <p class="text-sm text-gray-300 mb-6">
                            Using the <code>svd()</code> function on our standardised data $\\mathbf{Z}_{12 \\times 2}$, R returns the three components.
                        </p>

                        <!-- SVD Output Block -->
                        <div class="bg-black/60 p-6 rounded-xl border border-white/10 font-mono text-xs leading-relaxed overflow-x-auto shadow-2xl">
                            <p class="text-cyan-400 mb-4">> svd(data2Xst)</p>
                            
                            <!-- D Vector -->
                            <div class="mb-6">
                                <p class="text-white/50">$d <span class="ml-2 text-[10px] uppercase text-accent/60">// Singular Values (Diagonal of D)</span></p>
                                <p class="bg-green-500/20 text-green-300 inline-block px-2 py-1 rounded mt-1">[1] 4.6096252  0.8668074</p>
                            </div>

                            <!-- U Matrix -->
                            <div class="mb-6">
                                <p class="text-white/50">$u <span class="ml-2 text-[10px] uppercase text-accent/60">// Matrix U (12 x 2)</span></p>
                                <table class="text-gray-300 mt-1 ml-4 border-l-2 border-green-500/30 pl-2">
                                    <thead class="text-white/40"><tr><th class="pr-4"></th><th class="px-2">[,1] ($d_1$)</th><th class="px-2">[,2] ($d_2$)</th></tr></thead>
                                    <tbody class="text-green-200/80">
                                        <tr><td class="pr-4 text-white/40">[1,]</td><td class="px-2">-0.48302515</td><td class="px-2"> 0.2256041</td></tr>
                                        <tr><td class="pr-4 text-white/40">[2,]</td><td class="px-2"> 0.00000000</td><td class="px-2"> 0.0000000</td></tr>
                                        <tr><td class="pr-4 text-white/40">[3,]</td><td class="px-2"> 0.07343365</td><td class="px-2"> 0.3905153</td></tr>
                                        <tr><td class="pr-4 text-white/40">[4,]</td><td class="px-2">-0.41734410</td><td class="px-2">-0.1236834</td></tr>
                                        <tr class="bg-white/10 font-bold"><td class="pr-4 text-white/80">[5,]</td><td class="px-2">-0.21254835</td><td class="px-2">-0.4317431</td></tr>
                                        <tr><td class="pr-4 text-white/40">[6,]</td><td class="px-2"> 0.20479575</td><td class="px-2">-0.3080597</td></tr>
                                        <tr><td class="pr-4 text-white/40">[7,]</td><td class="px-2"> 0.00000000</td><td class="px-2"> 0.0000000</td></tr>
                                        <tr class="bg-white/10 font-bold"><td class="pr-4 text-white/80">[8,]</td><td class="px-2"> 0.41734410</td><td class="px-2"> 0.1236834</td></tr>
                                        <tr><td class="pr-4 text-white/40">[9,]</td><td class="px-2">-0.20479575</td><td class="px-2"> 0.3080597</td></tr>
                                        <tr><td class="pr-4 text-white/40">[10,]</td><td class="px-2"> 0.21254835</td><td class="px-2"> 0.4317431</td></tr>
                                        <tr><td class="pr-4 text-white/40">[11,]</td><td class="px-2"> 0.48302515</td><td class="px-2">-0.2256041</td></tr>
                                        <tr><td class="pr-4 text-white/40">[12,]</td><td class="px-2">-0.07343365</td><td class="px-2">-0.3905153</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <!-- V Matrix -->
                            <div>
                                <p class="text-white/50">$v <span class="ml-2 text-[10px] uppercase text-accent/60">// Matrix V (2 x 2)</span></p>
                                <table class="text-gray-300 mt-1 ml-4 border-l-2 border-green-500/30 pl-2 bg-green-500/10">
                                    <thead class="text-white/40"><tr><th class="pr-4"></th><th class="px-2">[,1]</th><th class="px-2">[,2]</th></tr></thead>
                                    <tbody class="text-green-300">
                                        <tr><td class="pr-4 text-white/40">[1,]</td><td class="px-2">-0.7071068</td><td class="px-2">-0.7071068</td></tr>
                                        <tr><td class="pr-4 text-white/40">[2,]</td><td class="px-2"> 0.7071068</td><td class="px-2">-0.7071068</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
            `
        },

        'svd-ex1': {
            title: 'SVD Example 1: Reconstructing z_81',
            html: `
                <div class="space-y-8">
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 9</span>
                            <h3 class="text-xl font-bold text-accent">8th Value of 1st Standardised Variable</h3>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                            <!-- Target Value Box -->
                            <div class="bg-black/40 p-5 rounded-lg border border-white/5">
                                <p class="text-xs text-white/50 uppercase mb-4 tracking-widest">Target Value ($i=8, j=1$)</p>
                                <div class="font-mono text-sm space-y-1">
                                    <p class="text-white/40">  [7,]  0.000   0.000</p>
                                    <p class="bg-white/10 p-1 rounded border border-white/20"><span class="text-white/40">[8,]</span> <span class="text-green-400 font-bold bg-green-500/20 px-1">-1.436</span>  1.285</p>
                                    <p class="text-white/40">  [9,]  0.479  -0.856</p>
                                </div>
                                <div class="mt-6 text-center">
                                    <p class="text-2xl font-bold text-white">$$z_{81} = -1.436$$</p>
                                </div>
                            </div>

                            <!-- Math Reconstruction -->
                            <div class="space-y-4">
                                <h4 class="text-xs font-bold text-accent uppercase tracking-widest">Mathematical Proof</h4>
                                <div class="bg-black/60 p-5 rounded-xl border border-accent/30 font-mono text-sm overflow-x-auto leading-loose text-gray-300">
                                    <p class="text-white">$$z_{ij} = \\sum_{k=1}^{\\min(n,p)} d_k u_{ik} v_{jk}$$</p>
                                    <div class="h-px bg-white/10 my-3"></div>
                                    <p>$$z_{81} = d_1 u_{81} v_{11} + d_2 u_{82} v_{12}$$</p>
                                    <div class="text-[11px] opacity-80 mt-2 space-y-1">
                                        <p>= 4.609 * (0.417) * (-0.707) + 0.866 * (0.1236) * (-0.707)</p>
                                        <p>= -1.358 + (-0.075)</p>
                                    </div>
                                    <p class="text-lg text-green-400 font-bold mt-4">$$= -1.436$$</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            `
        },

        'svd-ex2': {
            title: 'SVD Example 2: Reconstructing z_52',
            html: `
                <div class="space-y-8">
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 10</span>
                            <h3 class="text-xl font-bold text-accent">5th Value of 2nd Standardised Variable</h3>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                            <!-- Target Value Box -->
                            <div class="bg-black/40 p-5 rounded-lg border border-white/5">
                                <p class="text-xs text-white/50 uppercase mb-4 tracking-widest">Target Value ($i=5, j=2$)</p>
                                <div class="font-mono text-sm space-y-1">
                                    <p class="text-white/40">  [4,]  1.436  -1.285</p>
                                    <p class="bg-white/10 p-1 rounded border border-white/20"><span class="text-white/40">[5,]</span>  0.957 <span class="text-green-400 font-bold bg-green-500/20 px-1">-0.428</span></p>
                                    <p class="text-white/40">  [6,] -0.479   0.856</p>
                                </div>
                                <div class="mt-6 text-center">
                                    <p class="text-2xl font-bold text-white">$$z_{52} = -0.428$$</p>
                                </div>
                            </div>

                            <!-- Math Reconstruction -->
                            <div class="space-y-4">
                                <h4 class="text-xs font-bold text-accent uppercase tracking-widest">Mathematical Proof</h4>
                                <div class="bg-black/60 p-5 rounded-xl border border-accent/30 font-mono text-sm overflow-x-auto leading-loose text-gray-300">
                                    <p>$$z_{52} = d_1 u_{51} v_{21} + d_2 u_{52} v_{22}$$</p>
                                    <div class="text-[11px] opacity-80 mt-2 space-y-1">
                                        <p>= 4.609 * (-0.212) * (0.707) + 0.866 * (-0.423) * (-0.707)</p>
                                        <p>= -0.690 + 0.259</p>
                                    </div>
                                    <p class="text-lg text-green-400 font-bold mt-4">$$= -0.428$$</p>
                                </div>
                                <div class="p-3 bg-red-500/10 border border-red-500/30 rounded text-[10px] text-red-200">
                                    <strong>Note:</strong> The lecture slide has a small typo showing $v_{11}$ and $v_{12}$ in the formula, but the numbers substituted ($0.707$ and $-0.707$) correctly belong to $v_{21}$ and $v_{22}$ (Row 2 of matrix V). The formula above is corrected for your understanding!
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            `
        },

        'svd-three-var': {
            title: 'SVD: Three Variable Case',
            html: `
                <div class="space-y-10">
                    <section class="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">SLIDE 11</span>
                            <h3 class="text-xl font-bold text-accent">Adding a Third Variable ($x_3$)</h3>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <!-- Raw Data Table -->
                            <div class="bg-black/40 p-4 rounded-lg border border-white/5">
                                <p class="text-[10px] text-white/40 uppercase mb-3 font-mono">> data3X</p>
                                <table class="w-full text-center text-[11px] font-mono border-collapse">
                                    <thead class="text-accent border-b border-white/10">
                                        <tr><th class="p-1">Row</th><th class="p-1">x1</th><th class="p-1">x2</th><th class="p-1 bg-white/10">x3</th></tr>
                                    </thead>
                                    <tbody class="text-gray-400">
                                        <tr class="bg-green-500/5"><td>1</td><td>8</td><td>1</td><td class="text-white font-bold bg-white/5">9</td></tr>
                                        <tr class="bg-green-500/5"><td>2</td><td>5</td><td>5</td><td class="text-white font-bold bg-white/5">5</td></tr>
                                        <tr class="bg-green-500/5"><td>3</td><td>4</td><td>5</td><td class="text-white font-bold bg-white/5">4</td></tr>
                                        <tr class="bg-green-500/5"><td>4</td><td>8</td><td>2</td><td class="text-white font-bold bg-white/5">7</td></tr>
                                        <tr class="bg-green-500/5"><td>...</td><td>...</td><td>...</td><td class="bg-white/5">...</td></tr>
                                        <tr class="bg-green-500/5 border-b border-white/10"><td>12</td><td>6</td><td>5</td><td class="text-white font-bold bg-white/5">3</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <!-- Process Arrow -->
                            <div class="flex flex-col items-center justify-center gap-4">
                                <div class="relative flex items-center justify-center w-full">
                                    <svg viewBox="0 0 100 40" class="w-full max-w-[150px]">
                                        <path d="M 0 20 L 80 20" stroke="#4ade80" stroke-width="6" fill="none" />
                                        <path d="M 70 5 L 95 20 L 70 35 Z" fill="#4ade80" />
                                    </svg>
                                </div>
                                <div class="w-full bg-green-600/30 border-2 border-green-500 p-4 rounded-xl text-center shadow-lg">
                                    <p class="text-xs font-black text-white uppercase tracking-widest leading-relaxed">
                                        X Data Matrix <br><span class="text-green-300">Needs to be scaled</span><br>(Standardised)
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Correlation Matrix -->
                        <div class="mt-10 bg-black/60 p-6 rounded-xl border border-white/10">
                            <p class="text-[10px] text-cyan-400 font-mono mb-4">> round(cor(data3X), 3)</p>
                            <div class="overflow-x-auto">
                                <table class="w-full text-center text-sm font-mono max-w-md mx-auto">
                                    <thead class="text-white/40 border-b border-white/10">
                                        <tr><th></th><th>x1</th><th>x2</th><th>x3</th></tr>
                                    </thead>
                                    <tbody class="text-white">
                                        <tr class="border-b border-white/5">
                                            <td class="text-white/40">x1</td><td>1.000</td><td class="bg-green-500/20 text-green-300">-0.932</td><td>0.056</td>
                                        </tr>
                                        <tr class="border-b border-white/5">
                                            <td class="text-white/40">x2</td><td class="bg-white/10">-0.932</td><td>1.000</td><td class="bg-red-500/20 text-red-300">-0.100</td>
                                        </tr>
                                        <tr>
                                            <td class="text-white/40">x3</td><td>0.056</td><td>-0.100</td><td>1.000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="mt-6 text-center">
                                <p class="text-sm font-black text-white uppercase tracking-widest">
                                    High correlation between x1 and x2!!!!
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            `
        }
    }
};