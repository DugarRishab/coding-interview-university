import React, {memo, useEffect, useState} from 'react';
import {
	AppBar,
	Divider,
	Drawer,
	IconButton
} from "@mui/material";

const Menu = ({
	handleDrawerClose,
	menuOpen
}) => {
	
	const { innerWidth: width, innerHeight: height } = window;
	// const [menuOpen, setMenuOpen] = useState(false);
	
	// const handleDrawerOpen = () => {
	// 	setMenuOpen(true);
	// };

	// const handleDrawerClose = () => {
	// 	setMenuOpen(false);
	// };

	const handleLinkClick = () => {
		// setMenuOpen(false);
		handleDrawerClose();
	};

	// const drawerBtn = document.getElementById("drawer-btn");
	
	// useEffect(() => {
	// 	drawerBtn.addEventListener("click", () => {
	// 		setMenuOpen(!menuOpen);
	// 	});
		
	// }, [drawerBtn, menuOpen]);
	return (
		<>
			{width <= 720 && (
				<Drawer
					variant="persistant"
					anchor="left"
					open={menuOpen}
					className="drawer"
				>
					<IconButton
						onClick={handleDrawerClose}
						sx={{
							color: "white",
						}}
					>
						<span class="material-icons">chevron_left</span>
					</IconButton>
					<Divider />
					<>
						<h2 id="table-of-contents">Table of Contents</h2>
						<h3 id="the-study-plan">The Study Plan</h3>
						<ul>
							<li>
								<a onClick={handleLinkClick} href="#what-is-it">
									What is it?
								</a>
							</li>
							<li>
								<a onClick={handleLinkClick} href="#why-use-it">
									Why use it?
								</a>
							</li>
							<li>
								<a
									onClick={handleLinkClick}
									href="#how-to-use-it"
								>
									How to use it
								</a>
							</li>
							<li>
								<a
									onClick={handleLinkClick}
									href="#dont-feel-you-arent-smart-enough"
								>
									Don&#39;t feel you aren&#39;t smart enough
								</a>
							</li>
							<li>
								<a
									onClick={handleLinkClick}
									href="#a-note-about-video-resources"
								>
									A Note About Video Resources
								</a>
							</li>
							<li>
								<a
									onClick={handleLinkClick}
									href="#choose-a-programming-language"
								>
									Choose a Programming Language
								</a>
							</li>
							<li>
								<a
									onClick={handleLinkClick}
									href="#books-for-data-structures-and-algorithms"
								>
									Books for Data Structures and Algorithms
								</a>
							</li>
							<li>
								<a
									onClick={handleLinkClick}
									href="#interview-prep-books"
								>
									Interview Prep Books
								</a>
							</li>
							<li>
								<a
									onClick={handleLinkClick}
									href="#dont-make-my-mistakes"
								>
									Don&#39;t Make My Mistakes
								</a>
							</li>
							<li>
								<a
									onClick={handleLinkClick}
									href="#what-you-wont-see-covered"
								>
									What you Won&#39;t See Covered
								</a>
							</li>
							<li>
								<a
									onClick={handleLinkClick}
									href="#the-daily-plan"
								>
									The Daily Plan
								</a>
							</li>
							<li>
								<a
									onClick={handleLinkClick}
									href="#coding-question-practice"
								>
									Coding Question Practice
								</a>
							</li>
							<li>
								<a
									onClick={handleLinkClick}
									href="#coding-problems"
								>
									Coding Problems
								</a>
							</li>
						</ul>
						<h3 id="topics-of-study">Topics of Study</h3>
						<ul>
							<li>
								<a
									onClick={handleLinkClick}
									href="#algorithmic-complexity--big-o--asymptotic-analysis"
								>
									Algorithmic complexity / Big-O / Asymptotic
									analysis
								</a>
							</li>
							<li>
								<a
									onClick={handleLinkClick}
									href="#data-structures"
								>
									Data Structures
								</a>
								<ul>
									<li>
										<a
											onClick={handleLinkClick}
											href="#arrays"
										>
											Arrays
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#linked-lists"
										>
											Linked Lists
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#stack"
										>
											Stack
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#queue"
										>
											Queue
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#hash-table"
										>
											Hash table
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a
									onClick={handleLinkClick}
									href="#more-knowledge"
								>
									More Knowledge
								</a>
								<ul>
									<li>
										<a
											onClick={handleLinkClick}
											href="#binary-search"
										>
											Binary search
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#bitwise-operations"
										>
											Bitwise operations
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a onClick={handleLinkClick} href="#trees">
									Trees
								</a>
								<ul>
									<li>
										<a
											onClick={handleLinkClick}
											href="#trees---intro"
										>
											Trees - Intro
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#binary-search-trees-bsts"
										>
											Binary search trees: BSTs
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#heap--priority-queue--binary-heap"
										>
											Heap / Priority Queue / Binary Heap
										</a>
									</li>
									<li>
										balanced search trees (general concept,
										not details)
									</li>
									<li>
										traversals: preorder, inorder,
										postorder, BFS, DFS
									</li>
								</ul>
							</li>
							<li>
								<a onClick={handleLinkClick} href="#sorting">
									Sorting
								</a>
								<ul>
									<li>selection</li>
									<li>insertion</li>
									<li>heapsort</li>
									<li>quicksort</li>
									<li>merge sort</li>
								</ul>
							</li>
							<li>
								<a onClick={handleLinkClick} href="#graphs">
									Graphs
								</a>
								<ul>
									<li>directed</li>
									<li>undirected</li>
									<li>adjacency matrix</li>
									<li>adjacency list</li>
									<li>traversals: BFS, DFS</li>
								</ul>
							</li>
							<li>
								<a
									onClick={handleLinkClick}
									href="#even-more-knowledge"
								>
									Even More Knowledge
								</a>
								<ul>
									<li>
										<a
											onClick={handleLinkClick}
											href="#recursion"
										>
											Recursion
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#dynamic-programming"
										>
											Dynamic Programming
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#design-patterns"
										>
											Design Patterns
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#combinatorics-n-choose-k--probability"
										>
											Combinatorics (n choose k) &amp;
											Probability
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#np-np-complete-and-approximation-algorithms"
										>
											NP, NP-Complete and Approximation
											Algorithms
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#how-computers-process-a-program"
										>
											How computers process a program
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#caches"
										>
											Caches
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#processes-and-threads"
										>
											Processes and Threads
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#testing"
										>
											Testing
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#string-searching--manipulations"
										>
											String searching &amp; manipulations
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#tries"
										>
											Tries
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#floating-point-numbers"
										>
											Floating Point Numbers
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#unicode"
										>
											Unicode
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#endianness"
										>
											Endianness
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#networking"
										>
											Networking
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a
									onClick={handleLinkClick}
									href="#final-review"
								>
									Final Review
								</a>
							</li>
						</ul>
						<h3 id="getting-the-job">Getting the Job</h3>
						<ul>
							<li>
								<a
									onClick={handleLinkClick}
									href="#update-your-resume"
								>
									Update Your Resume
								</a>
							</li>
							<li>
								<a onClick={handleLinkClick} href="#find-a-job">
									Find a Job
								</a>
							</li>
							<li>
								<a
									onClick={handleLinkClick}
									href="#interview-process--general-interview-prep"
								>
									Interview Process &amp; General Interview
									Prep
								</a>
							</li>
							<li>
								<a
									onClick={handleLinkClick}
									href="#be-thinking-of-for-when-the-interview-comes"
								>
									Be thinking of for when the interview comes
								</a>
							</li>
							<li>
								<a
									onClick={handleLinkClick}
									href="#have-questions-for-the-interviewer"
								>
									Have questions for the interviewer
								</a>
							</li>
							<li>
								<a
									onClick={handleLinkClick}
									href="#once-youve-got-the-job"
								>
									Once You&#39;ve Got The Job
								</a>
							</li>
						</ul>
						<p>
							<strong>
								---------------- Everything below this point is
								optional ----------------
							</strong>
						</p>
						<h3 id="optional-extra-topics--resources">
							Optional Extra Topics &amp; Resources
						</h3>
						<ul>
							<li>
								<a
									onClick={handleLinkClick}
									href="#additional-books"
								>
									Additional Books
								</a>
							</li>
							<li>
								<a
									onClick={handleLinkClick}
									href="#system-design-scalability-data-handling"
								>
									System Design, Scalability, Data Handling
								</a>{" "}
								(if you have 4+ years experience)
							</li>
							<li>
								<a
									onClick={handleLinkClick}
									href="#additional-learning"
								>
									Additional Learning
								</a>
								<ul>
									<li>
										<a
											onClick={handleLinkClick}
											href="#compilers"
										>
											Compilers
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#emacs-and-vim"
										>
											Emacs and vi(m)
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#unix-command-line-tools"
										>
											Unix command line tools
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#information-theory-videos"
										>
											Information theory
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#parity--hamming-code-videos"
										>
											Parity &amp; Hamming Code
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#entropy"
										>
											Entropy
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#cryptography"
										>
											Cryptography
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#compression"
										>
											Compression
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#computer-security"
										>
											Computer Security
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#garbage-collection"
										>
											Garbage collection
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#parallel-programming"
										>
											Parallel Programming
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#messaging-serialization-and-queueing-systems"
										>
											Messaging, Serialization, and
											Queueing Systems
										</a>
									</li>
									<li>
										<a onClick={handleLinkClick} href="#a">
											A*
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#fast-fourier-transform"
										>
											Fast Fourier Transform
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#bloom-filter"
										>
											Bloom Filter
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#hyperloglog"
										>
											HyperLogLog
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#locality-sensitive-hashing"
										>
											Locality-Sensitive Hashing
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#van-emde-boas-trees"
										>
											van Emde Boas Trees
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#augmented-data-structures"
										>
											Augmented Data Structures
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#balanced-search-trees"
										>
											Balanced search trees
										</a>
										<ul>
											<li>AVL trees</li>
											<li>Splay trees</li>
											<li>Red/black trees</li>
											<li>2-3 search trees</li>
											<li>2-3-4 Trees (aka 2-4 trees)</li>
											<li>N-ary (K-ary, M-ary) trees</li>
											<li>B-Trees</li>
										</ul>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#k-d-trees"
										>
											k-D Trees
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#skip-lists"
										>
											Skip lists
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#network-flows"
										>
											Network Flows
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#disjoint-sets--union-find"
										>
											Disjoint Sets &amp; Union Find
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#math-for-fast-processing"
										>
											Math for Fast Processing
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#treap"
										>
											Treap
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#linear-programming-videos"
										>
											Linear Programming
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#geometry-convex-hull-videos"
										>
											Geometry, Convex hull
										</a>
									</li>
									<li>
										<a
											onClick={handleLinkClick}
											href="#discrete-math"
										>
											Discrete math
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a
									onClick={handleLinkClick}
									href="#additional-detail-on-some-subjects"
								>
									Additional Detail on Some Subjects
								</a>
							</li>
							<li>
								<a
									onClick={handleLinkClick}
									href="#video-series"
								>
									Video Series
								</a>
							</li>
							<li>
								<a
									onClick={handleLinkClick}
									href="#computer-science-courses"
								>
									Computer Science Courses
								</a>
							</li>
							<li>
								<a onClick={handleLinkClick} href="#papers">
									Papers
								</a>
							</li>
						</ul>
					</>
				</Drawer>
			)}
		</>
	);
}
const areEqual = (prevProps, nextProps) => true;
 
export default memo(Menu, areEqual);