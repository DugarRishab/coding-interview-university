import React, { useEffect } from "react";
import {
	Box,
	Paper,
	Stack,
	Typography,
	Chip,
	Divider,
	TextField,
	InputAdornment,
	Button,
	Avatar,
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Checkbox,
} from "@mui/material";
import "./style.css";
import { markComplete } from "../services/api";
import { alert } from "../components/CustomAlert/alert";
import { useState } from "react";

const Home = ({ user }) => {
	const handleLinkClick = () => {};
	const { innerWidth: width, innerHeight: height } = window;

	const [checked, setChecked] = useState(Array(500).fill(false));

	const handleCheckClick = async function (e) {
		const copyChecked = [...checked];
		copyChecked[+e.target.id] = e.target.checked;
		// console.log(checked, copyChecked);
		setChecked(copyChecked);
		try {
			await markComplete({
				taskId: e.target.id,
				status: e.target.checked,
				cat: 'dsa'
			});
			// console.log(e.target.id);

			// alert({ message: "Item marked complete", type: "success" });
		} catch (err) {
			alert({ message: err.response.data.message, type: "error" });
		}
	};

	useEffect(() => {
		if (user) {
			const copyChecked = [...checked];
			user.tasks.forEach((task) => {
				if (task.cat === "dsa" || task.cat === undefined) {
					copyChecked[+task.id] = task.status;
				}
				
			});
			setChecked(copyChecked);
			// console.log("updated Check => ", checked);
		}
	}, [user]);

	return (
		<div className="home">
			{width > 720 && (
				<div className="menu">
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
							<a onClick={handleLinkClick} href="#how-to-use-it">
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
							<a onClick={handleLinkClick} href="#the-daily-plan">
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
									<a onClick={handleLinkClick} href="#arrays">
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
									<a onClick={handleLinkClick} href="#stack">
										Stack
									</a>
								</li>
								<li>
									<a onClick={handleLinkClick} href="#queue">
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
							<a onClick={handleLinkClick} href="#more-knowledge">
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
									balanced search trees (general concept, not
									details)
								</li>
								<li>
									traversals: preorder, inorder, postorder,
									BFS, DFS
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
									<a onClick={handleLinkClick} href="#caches">
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
									<a onClick={handleLinkClick} href="#tries">
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
							<a onClick={handleLinkClick} href="#final-review">
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
								Interview Process &amp; General Interview Prep
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
										Messaging, Serialization, and Queueing
										Systems
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
									<a onClick={handleLinkClick} href="#treap">
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
							<a onClick={handleLinkClick} href="#video-series">
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
				</div>
			)}

			<div className="content">
				<h1 id="coding-interview-university">
					Coding Interview University
				</h1>
				<blockquote>
					<p>
						I originally created this as a short to-do list of study
						topics for becoming a software engineer, but it grew to
						the large list you see today. After going through this
						study plan,{" "}
						<a href="https://startupnextdoor.com/ive-been-acquired-by-amazon/?src=ciu">
							I got hired as a Software Development Engineer at
							Amazon
						</a>
						! You probably won&#39;t have to study as much as I did.
						Anyway, everything you need is here.
					</p>
					<p>
						I studied about 8-12 hours a day, for several months.
						This is my story:{" "}
						<a href="https://medium.freecodecamp.org/why-i-studied-full-time-for-8-months-for-a-google-interview-cc662ce9bb13">
							Why I studied full-time for 8 months for a Google
							interview
						</a>
					</p>
					<p>
						<strong>Please Note:</strong> You won&#39;t need to
						study as much as I did. I wasted a lot of time on things
						I didn&#39;t need to know. More info about that below.
						I&#39;ll help you get there without wasting your
						precious time.
					</p>
					<p>
						The items listed here will prepare you well for a
						technical interview at just about any software company,
						including the giants: Amazon, Facebook, Google, and
						Microsoft.
					</p>
					<p>
						<em>Best of luck to you!</em>
					</p>
				</blockquote>
				<Accordion
					expandIcon={
						<span className="material-icons">expand_more</span>
					}
				>
					<AccordionSummary>Translations</AccordionSummary>
					<AccordionDetails>
						<ul>
							<li>
								<a href="translations/README-cn.md">中文版本</a>
							</li>
							<li>
								<a href="translations/README-vi.md">
									Tiếng Việt - Vietnamese
								</a>
							</li>
							<li>
								<a href="translations/README-es.md">Español</a>
							</li>
							<li>
								<a href="translations/README-ptbr.md">
									Português Brasileiro
								</a>
							</li>
							<li>
								<a href="translations/README-pl.md">Polish</a>
							</li>
							<li>
								<a href="translations/README-tw.md">繁體中文</a>
							</li>
							<li>
								<a href="translations/README-ja.md">
									Japanese (日本語)
								</a>
							</li>
							<li>
								<a href="translations/README-ru.md">Russian</a>
							</li>
							<li>
								<a href="translations/README-de.md">German</a>
							</li>
							<li>
								<a href="translations/README-id.md">
									Bahasa Indonesia
								</a>
							</li>
							<li>
								<a href="translations/README-kh.md">
									ខ្មែរ - Khmer
								</a>
							</li>
							<li>
								<a href="translations/README-uz.md">Uzbek</a>
							</li>
							<li>
								<a href="translations/README-bg.md">
									Bulgarian
								</a>
							</li>
							<li>
								<a href="translations/README-bn.md">
									বাংলা - Bangla
								</a>
							</li>
						</ul>
					</AccordionDetails>
				</Accordion>

				<Accordion
					expandIcon={
						<span className="material-icons">expand_more</span>
					}
				>
					<AccordionSummary>
						Translations in progress
					</AccordionSummary>
					<AccordionDetails>
						<ul>
							<li>
								<a href="https://github.com/jwasham/coding-interview-university/issues/81">
									हिन्दी
								</a>
							</li>
							<li>
								<a href="https://github.com/jwasham/coding-interview-university/issues/82">
									עברית
								</a>
							</li>
							<li>
								<a href="https://github.com/jwasham/coding-interview-university/issues/98">
									Arabic
								</a>
							</li>
							<li>
								<a href="https://github.com/jwasham/coding-interview-university/issues/90">
									Turkish
								</a>
							</li>
							<li>
								<a href="https://github.com/jwasham/coding-interview-university/issues/89">
									French
								</a>
							</li>
							<li>
								<a href="https://github.com/jwasham/coding-interview-university/issues/106">
									Українська
								</a>
							</li>
							<li>
								<a href="https://github.com/jwasham/coding-interview-university/issues/118">
									Korean(한국어)
								</a>
							</li>
							<li>
								<a href="https://github.com/jwasham/coding-interview-university/issues/117">
									Telugu
								</a>
							</li>
							<li>
								<a href="https://github.com/jwasham/coding-interview-university/issues/519">
									Urdu
								</a>
							</li>
							<li>
								<a href="https://github.com/jwasham/coding-interview-university/issues/156">
									Thai
								</a>
							</li>
							<li>
								<a href="https://github.com/jwasham/coding-interview-university/issues/166">
									Greek
								</a>
							</li>
							<li>
								<a href="https://github.com/jwasham/coding-interview-university/issues/239">
									Malayalam
								</a>
							</li>
							<li>
								<a href="https://github.com/jwasham/coding-interview-university/issues/186">
									Persian - Farsi
								</a>
							</li>
							<li>
								<a href="https://github.com/jwasham/coding-interview-university/issues/1164">
									Afrikaans
								</a>
							</li>
						</ul>
					</AccordionDetails>
				</Accordion>

				<div align="center">
					<hr />
					<p>
						<a href="https://github.com/sponsors/jwasham">
							<strong>Become a sponsor</strong> and support Coding
							Interview University!
						</a>
					</p>
					<p>
						<strong>Special thanks to:</strong>
					</p>
					<div>
						<a href="https://algo.monster/?utm_campaign=jwasham&utm_medium=referral&utm_content=coding-interview-university&utm_source=github">
							<div>
								<img
									src="https://d3j2pkmjtin6ou.cloudfront.net/sponsors/algo-monster.png"
									width="300"
									alt="AlgoMonster"
								/>
							</div>
							<div>
								<p>
									<strong>
										Master the technical interview without
										endless grinding.
									</strong>
								</p>
							</div>
							<div>
								<sup>
									Created by ex-Google engineers, AlgoMonster
									will help you crush the technical interview
									in less time and with fewer sleepless nights
									grinding away random problems. You will
									learn the key patterns necessary to solve
									any interview question and gain the
									systematic knowledge you need to prove your
									expertise. Be more confident as you walk
									into that interview!
								</sup>
							</div>
						</a>
					</div>
					<hr />
				</div>

				<h2 id="what-is-it">What is it?</h2>
				<p>
					<img
						src="https://d3j2pkmjtin6ou.cloudfront.net/coding-at-the-whiteboard-silicon-valley.png"
						alt="Coding at the whiteboard - from HBO&#39;s Silicon Valley"
					/>
				</p>
				<p>
					This is my multi-month study plan for becoming a software
					engineer for a large company.{" "}
				</p>
				<p>
					<strong>Required:</strong>{" "}
				</p>
				<ul>
					<li>
						A little experience with coding (variables, loops,
						methods/functions, etc)
					</li>
					<li>Patience</li>
					<li>Time</li>
				</ul>
				<p>
					Note this is a study plan for{" "}
					<strong>software engineering</strong>, not web development.
					Large software companies like Google, Amazon, Facebook and
					Microsoft view software engineering as different from web
					development. For example, Amazon has Frontend Engineers
					(FEE) and Software Development Engineers (SDE). These are 2
					separate roles and the interviews for them will not be the
					same, as each has its own competencies. These companies
					require computer science knowledge for software
					development/engineering roles.
				</p>
				<p>
					There is a lot to learn in a university Computer Science
					program, but only knowing about 75% is good enough for an
					interview, so that&#39;s what I cover here. For a complete
					CS self-taught program, the resources for my study plan have
					been included in Kamran Ahmed&#39;s Computer Science
					Roadmap:{" "}
					<a href="https://roadmap.sh/computer-science">
						https://roadmap.sh/computer-science
					</a>
				</p>
				<h2 id="why-use-it">Why use it?</h2>
				<p>
					If you want to work as a software engineer for a large
					company, these are the things you have to know.
				</p>
				<p>
					If you missed out on getting a degree in computer science,
					like I did, this will catch you up and save four years of
					your life.
				</p>
				<p>
					When I started this project, I didn&#39;t know a stack from
					a heap, didn&#39;t know Big-O anything, or anything about
					trees, or how to traverse a graph. If I had to code a
					sorting algorithm, I can tell ya it would have been
					terrible. Every data structure I had ever used was built
					into the language, and I didn&#39;t know how they worked
					under the hood at all. I never had to manage memory unless a
					process I was running would give an &quot;out of
					memory&quot; error, and then I&#39;d have to find a
					workaround. I used a few multidimensional arrays in my life
					and thousands of associative arrays, but I never created
					data structures from scratch.
				</p>
				<p>
					It&#39;s a long plan. It may take you months. If you are
					familiar with a lot of this already it will take you a lot
					less time.
				</p>
				<h2 id="how-to-use-it">How to use it</h2>
				<p>
					Everything below is an outline, and you should tackle the
					items in order from top to bottom.
				</p>
				<p>
					I&#39;m using GitHub&#39;s special markdown flavor,
					including tasks lists to track progress.
				</p>
				<ul>
					<li>
						<a href="https://guides.github.com/features/mastering-markdown/#GitHub-flavored-markdown">
							More about GitHub-flavored markdown
						</a>
					</li>
				</ul>
				<h3 id="if-you-dont-want-to-use-git">
					If you don&#39;t want to use git
				</h3>
				<p>
					On this page, click the Code button near the top, then click
					&quot;Download ZIP&quot;. Unzip the file and you can work
					with the text files.
				</p>
				<p>
					If you&#39;re open in a code editor that understands
					markdown, you&#39;ll see everything formatted nicely.
				</p>
				<p>
					<img
						src="https://d3j2pkmjtin6ou.cloudfront.net/how-to-download-as-zip.png"
						alt="How to download the repo as a zip file"
					/>
				</p>
				<h3 id="if-youre-comfortable-with-git">
					If you&#39;re comfortable with git
				</h3>
				<p>
					Create a new branch so you can check items like this, just
					put an x in the brackets: [x]
				</p>
				<ol>
					<li>
						<p>
							<em>
								<strong>Fork the GitHub repo:</strong>
							</em>{" "}
							<code>
								https://github.com/jwasham/coding-interview-university
							</code>{" "}
							by clicking on the Fork button.
						</p>
						<p>
							{" "}
							<img
								src="https://d3j2pkmjtin6ou.cloudfront.net/fork-button.png"
								alt="Fork the GitHub repo"
							/>
						</p>
					</li>
					<li>
						<p>Clone to your local repo:</p>
						<pre>
							<code>
								git clone
								git@github.com:&lt;your_github_username&gt;/coding-interview-university.git
								cd coding-interview-university git checkout -b
								progress git remote add jwasham
								https://github.com/jwasham/coding-interview-university
								git fetch --all
							</code>
						</pre>
					</li>
					<li>
						<p>
							Mark all boxes with X after you completed your
							changes:
						</p>
						<pre>
							<code>
								git add . git commit -m &quot;Marked x&quot; git
								rebase jwasham/main git push --set-upstream
								origin progress git push --force
							</code>
						</pre>
					</li>
				</ol>
				<h2 id="dont-feel-you-arent-smart-enough">
					Don&#39;t feel you aren&#39;t smart enough
				</h2>
				<ul>
					<li>
						Successful software engineers are smart, but many have
						an insecurity that they aren&#39;t smart enough.
					</li>
					<li>
						Following videos may help you overcome this insecurity:
						<ul>
							<li>
								<a href="https://www.youtube.com/watch?v=0SARbwvhupQ">
									The myth of the Genius Programmer
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=1i8ylq4j_EY">
									It&#39;s Dangerous to Go Alone: Battling the
									Invisible Monsters in Tech
								</a>
							</li>
						</ul>
					</li>
				</ul>
				<h2 id="a-note-about-video-resources">
					A Note About Video Resources
				</h2>
				<p>
					Some videos are available only by enrolling in a Coursera or
					EdX class. These are called MOOCs. Sometimes the classes are
					not in session so you have to wait a couple of months, so
					you have no access.
				</p>
				<p>
					It would be great to replace the online course resources
					with free and always-available public sources, such as
					YouTube videos (preferably university lectures), so that you
					people can study these anytime, not just when a specific
					online course is in session.
				</p>
				<h2 id="choose-a-programming-language">
					Choose a Programming Language
				</h2>
				<p>
					You&#39;ll need to choose a programming language for the
					coding interviews you do, but you&#39;ll also need to find a
					language that you can use to study computer science
					concepts.
				</p>
				<p>
					Preferably the language would be the same, so that you only
					need to be proficient in one.
				</p>
				<h3 id="for-this-study-plan">For this Study Plan</h3>
				<p>
					When I did the study plan, I used 2 languages for most of
					it: C and Python
				</p>
				<ul>
					<li>
						C: Very low level. Allows you to deal with pointers and
						memory allocation/deallocation, so you feel the data
						structures and algorithms in your bones. In higher level
						languages like Python or Java, these are hidden from
						you. In day to day work, that&#39;s terrific, but when
						you&#39;re learning how these low-level data structures
						are built, it&#39;s great to feel close to the metal.
						<ul>
							<li>
								C is everywhere. You&#39;ll see examples in
								books, lectures, videos, <em>everywhere</em>{" "}
								while you&#39;re studying.
							</li>
							<li>
								<a href="https://www.amazon.com/Programming-Language-Brian-W-Kernighan/dp/0131103628">
									The C Programming Language, Vol 2
								</a>
								<ul>
									<li>
										This is a short book, but it will give
										you a great handle on the C language and
										if you practice it a little you&#39;ll
										quickly get proficient. Understanding C
										helps you understand how programs and
										memory work.
									</li>
									<li>
										You don&#39;t need to go super deep in
										the book (or even finish it). Just get
										to where you&#39;re comfortable reading
										and writing in C.
									</li>
									<li>
										<a href="https://github.com/lekkas/c-algorithms">
											Answers to questions in the book
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						Python: Modern and very expressive, I learned it because
						it&#39;s just super useful and also allows me to write
						less code in an interview.
					</li>
				</ul>
				<p>This is my preference. You do what you like, of course.</p>
				<p>
					You may not need it, but here are some sites for learning a
					new language:
				</p>
				<ul>
					<li>
						<a href="https://exercism.org/tracks">Exercism</a>
					</li>
					<li>
						<a href="http://www.codewars.com">Codewars</a>
					</li>
					<li>
						<a href="https://www.hackerearth.com/for-developers/">
							HackerEarth
						</a>
					</li>
					<li>
						<a href="https://www.scaler.com/topics/">
							Scaler Topics (Java, C++)
						</a>
					</li>
				</ul>
				<h3 id="for-your-coding-interview">
					For your Coding Interview
				</h3>
				<p>
					You can use a language you are comfortable in to do the
					coding part of the interview, but for large companies, these
					are solid choices:
				</p>
				<ul>
					<li>C++</li>
					<li>Java</li>
					<li>Python</li>
				</ul>
				<p>
					You could also use these, but read around first. There may
					be caveats:
				</p>
				<ul>
					<li>JavaScript</li>
					<li>Ruby</li>
				</ul>
				<p>
					Here is an article I wrote about choosing a language for the
					interview:
					<a href="https://startupnextdoor.com/important-pick-one-language-for-the-coding-interview/">
						Pick One Language for the Coding Interview
					</a>
					. This is the original article my post was based on:{" "}
					<a href="https://web.archive.org/web/20210516054124/http://blog.codingforinterviews.com/best-programming-language-jobs/">
						Choosing a Programming Language for Interviews
					</a>
				</p>
				<p>
					You need to be very comfortable in the language and be
					knowledgeable.
				</p>
				<p>Read more about choices: </p>
				<ul>
					<li>
						<a href="http://www.byte-by-byte.com/choose-the-right-language-for-your-coding-interview/">
							Choose the Right Language for Your Coding Interview
						</a>
					</li>
				</ul>
				<p>
					<a href="programming-language-resources.md">
						See language-specific resources here
					</a>
				</p>
				<h2 id="books-for-data-structures-and-algorithms">
					Books for Data Structures and Algorithms
				</h2>
				<p>This book will form your foundation for computer science.</p>
				<p>
					Just choose one, in a language that you will be comfortable
					with. You&#39;ll be doing a lot of reading and coding.
				</p>
				<h3 id="c">C</h3>
				<ul>
					<li>
						<a href="https://www.amazon.com/Algorithms-Parts-1-5-Bundle-Fundamentals/dp/0201756080">
							Algorithms in C, Parts 1-5 (Bundle), 3rd Edition
						</a>
						<ul>
							<li>
								Fundamentals, Data Structures, Sorting,
								Searching, and Graph Algorithms
							</li>
						</ul>
					</li>
				</ul>
				<h3 id="python">Python</h3>
				<ul>
					<li>
						<a href="https://www.amazon.com/Structures-Algorithms-Python-Michael-Goodrich/dp/1118290275/">
							Data Structures and Algorithms in Python
						</a>
						<ul>
							<li>by Goodrich, Tamassia, Goldwasser</li>
							<li>
								I loved this book. It covered everything and
								more.
							</li>
							<li>Pythonic code</li>
							<li>
								my glowing book report:{" "}
								<a href="https://startupnextdoor.com/book-report-data-structures-and-algorithms-in-python/">
									https://startupnextdoor.com/book-report-data-structures-and-algorithms-in-python/
								</a>
							</li>
						</ul>
					</li>
				</ul>
				<h3 id="java">Java</h3>
				<p>Your choice:</p>
				<ul>
					<li>
						Goodrich, Tamassia, Goldwasser
						<ul>
							<li>
								<a href="https://www.amazon.com/Data-Structures-Algorithms-Michael-Goodrich/dp/1118771338/">
									Data Structures and Algorithms in Java
								</a>
							</li>
						</ul>
					</li>
					<li>
						Sedgewick and Wayne:
						<ul>
							<li>
								<a href="https://www.amazon.com/Algorithms-4th-Robert-Sedgewick/dp/032157351X/">
									Algorithms
								</a>
							</li>
							<li>
								Free Coursera course that covers the book
								(taught by the authors!):
								<ul>
									<li>
										<a href="https://www.coursera.org/learn/algorithms-part1">
											Algorithms I
										</a>
									</li>
									<li>
										<a href="https://www.coursera.org/learn/algorithms-part2">
											Algorithms II
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
				<h3 id="c-1">C++</h3>
				<p>Your choice:</p>
				<ul>
					<li>
						Goodrich, Tamassia, and Mount
						<ul>
							<li>
								<a href="https://www.amazon.com/Data-Structures-Algorithms-Michael-Goodrich/dp/0470383275">
									Data Structures and Algorithms in C++, 2nd
									Edition
								</a>
							</li>
						</ul>
					</li>
					<li>
						Sedgewick and Wayne
						<ul>
							<li>
								<a href="https://www.amazon.com/Algorithms-Parts-1-4-Fundamentals-Structure/dp/0201350882/">
									Algorithms in C++, Parts 1-4: Fundamentals,
									Data Structure, Sorting, Searching
								</a>
							</li>
							<li>
								<a href="https://www.amazon.com/Algorithms-Part-Graph-3rd-Pt-5/dp/0201361183/">
									Algorithms in C++ Part 5: Graph Algorithms
								</a>
							</li>
						</ul>
					</li>
				</ul>
				<h2 id="interview-prep-books">Interview Prep Books</h2>
				<p>
					You don&#39;t need to buy a bunch of these. Honestly
					&quot;Cracking the Coding Interview&quot; is probably
					enough, but I bought more to give myself more practice. But
					I always do too much.
				</p>
				<p>I bought both of these. They gave me plenty of practice.</p>
				<ul>
					<li>
						<a href="https://www.amazon.com/Programming-Interviews-Exposed-Through-Interview/dp/111941847X/">
							Programming Interviews Exposed: Coding Your Way
							Through the Interview, 4th Edition
						</a>
						<ul>
							<li>Answers in C++ and Java</li>
							<li>
								This is a good warm-up for Cracking the Coding
								Interview
							</li>
							<li>
								Not too difficult. Most problems may be easier
								than what you&#39;ll see in an interview (from
								what I&#39;ve read)
							</li>
						</ul>
					</li>
					<li>
						<a href="http://www.amazon.com/Cracking-Coding-Interview-6th-Programming/dp/0984782850/">
							Cracking the Coding Interview, 6th Edition
						</a>
						<ul>
							<li>answers in Java</li>
						</ul>
					</li>
				</ul>
				<h3 id="if-you-have-tons-of-extra-time">
					If you have tons of extra time:
				</h3>
				<p>Choose one:</p>
				<ul>
					<li>
						<a href="https://www.amazon.com/Elements-Programming-Interviews-Insiders-Guide/dp/1479274836">
							Elements of Programming Interviews (C++ version)
						</a>
					</li>
					<li>
						<a href="https://www.amazon.com/Elements-Programming-Interviews-Python-Insiders/dp/1537713949/">
							Elements of Programming Interviews in Python
						</a>
					</li>
					<li>
						<a href="https://www.amazon.com/Elements-Programming-Interviews-Java-Insiders/dp/1517435803/">
							Elements of Programming Interviews (Java version)
						</a>
						-{" "}
						<a href="https://github.com/gardncl/elements-of-programming-interviews">
							Companion Project - Method Stub and Test Cases for
							Every Problem in the Book
						</a>
					</li>
				</ul>
				<h2 id="dont-make-my-mistakes">Don&#39;t Make My Mistakes</h2>
				<p>
					This list grew over many months, and yes, it got out of
					hand.
				</p>
				<p>
					Here are some mistakes I made so you&#39;ll have a better
					experience. And you&#39;ll save months of time.
				</p>
				<h3 id="1-you-wont-remember-it-all">
					1. You Won&#39;t Remember it All
				</h3>
				<p>
					I watched hours of videos and took copious notes, and months
					later there was much I didn&#39;t remember. I spent 3 days
					going through my notes and making flashcards, so I could
					review. I didn&#39;t need all of that knowledge.
				</p>
				<p>Please, read so you won&#39;t make my mistakes:</p>
				<p>
					<a href="https://startupnextdoor.com/retaining-computer-science-knowledge/">
						Retaining Computer Science Knowledge
					</a>
					.
				</p>
				<h3 id="2-use-flashcards">2. Use Flashcards</h3>
				<p>
					To solve the problem, I made a little flashcards site where
					I could add flashcards of 2 types: general and code. Each
					card has different formatting. I made a mobile-first
					website, so I could review on my phone or tablet, wherever I
					am.
				</p>
				<p>Make your own for free:</p>
				<ul>
					<li>
						<a href="https://github.com/jwasham/computer-science-flash-cards">
							Flashcards site repo
						</a>
					</li>
				</ul>
				<p>
					<strong>I DON&#39;T RECOMMEND using my flashcards.</strong>{" "}
					There are too many and most of them are trivia that you
					don&#39;t need.
				</p>
				<p>But if you don&#39;t want to listen to me, here you go:</p>
				<ul>
					<li>
						<a href="https://github.com/jwasham/computer-science-flash-cards/blob/main/cards-jwasham.db">
							My flash cards database (1200 cards)
						</a>
						:
					</li>
					<li>
						<a href="https://github.com/jwasham/computer-science-flash-cards/blob/main/cards-jwasham-extreme.db">
							My flash cards database (extreme - 1800 cards)
						</a>
						:
					</li>
				</ul>
				<p>
					Keep in mind I went overboard and have cards covering
					everything from assembly language and Python trivia to
					machine learning and statistics. It&#39;s way too much for
					what&#39;s required.
				</p>
				<p>
					<strong>Note on flashcards:</strong> The first time you
					recognize you know the answer, don&#39;t mark it as known.
					You have to see the same card and answer it several times
					correctly before you really know it. Repetition will put
					that knowledge deeper in your brain.
				</p>
				<p>
					An alternative to using my flashcard site is{" "}
					<a href="http://ankisrs.net/">Anki</a>, which has been
					recommended to me numerous times. It uses a repetition
					system to help you remember. It&#39;s user-friendly,
					available on all platforms and has a cloud sync system. It
					costs $25 on iOS but is free on other platforms.
				</p>
				<p>
					My flashcard database in Anki format:{" "}
					<a href="https://ankiweb.net/shared/info/25173560">
						https://ankiweb.net/shared/info/25173560
					</a>{" "}
					(thanks <a href="https://github.com/xiewenya">@xiewenya</a>
					).
				</p>
				<p>
					Some students have mentioned formatting issues with white
					space that can be fixed by doing the following: open deck,
					edit card, click cards, select the &quot;styling&quot; radio
					button, add the member &quot;white-space: pre;&quot; to the
					card class.
				</p>
				<h3 id="3-do-coding-interview-questions-while-youre-learning">
					3. Do Coding Interview Questions While You&#39;re Learning
				</h3>
				<p>THIS IS VERY IMPORTANT.</p>
				<p>
					Start doing coding interview questions while you&#39;re
					learning data structures and algorithms.
				</p>
				<p>
					You need to apply what you&#39;re learning to solving
					problems, or you&#39;ll forget. I made this mistake.{" "}
				</p>
				<p>
					Once you&#39;ve learned a topic, and feel somewhat
					comfortable with it, for example,{" "}
					<strong>linked lists</strong>:
				</p>
				<ol>
					<li>
						Open one of the{" "}
						<a href="#interview-prep-books">
							coding interview books
						</a>{" "}
						(or coding problem websites, listed below){" "}
					</li>
					<li>Do 2 or 3 questions regarding linked lists. </li>
					<li>Move on to the next learning topic.</li>
					<li>
						Later, go back and do another 2 or 3 linked list
						problems.
					</li>
					<li>Do this with each new topic you learn.</li>
				</ol>
				<p>
					<strong>
						Keep doing problems while you&#39;re learning all this
						stuff, not after.
					</strong>
				</p>
				<p>
					You&#39;re not being hired for knowledge, but how you apply
					the knowledge.
				</p>
				<p>
					There are many resources for this, listed below. Keep going.
				</p>
				<h3 id="4-focus">4. Focus</h3>
				<p>
					There are a lot of distractions that can take up valuable
					time. Focus and concentration are hard. Turn on some music
					without lyrics and you&#39;ll be able to focus pretty well.
				</p>
				<h2 id="what-you-wont-see-covered">
					What you won&#39;t see covered
				</h2>
				<p>
					These are prevalent technologies but not part of this study
					plan:
				</p>
				<ul>
					<li>Javascript</li>
					<li>HTML, CSS, and other front-end technologies</li>
					<li>SQL</li>
				</ul>
				<h2 id="the-daily-plan">The Daily Plan</h2>
				<p>
					This course goes over a lot of subjects. Each will probably
					take you a few days, or maybe even a week or more. It
					depends on your schedule.
				</p>
				<p>
					Each day, take the next subject in the list, watch some
					videos about that subject, and then write an implementation
					of that data structure or algorithm in the language you
					chose for this course.
				</p>
				<p>You can see my code here:</p>
				<ul>
					<li>
						<a href="https://github.com/jwasham/practice-c">C</a>
					</li>
					<li>
						<a href="https://github.com/jwasham/practice-cpp">
							C++
						</a>
					</li>
					<li>
						<a href="https://github.com/jwasham/practice-python">
							Python
						</a>
					</li>
				</ul>
				<p>
					You don&#39;t need to memorize every algorithm. You just
					need to be able to understand it enough to be able to write
					your own implementation.
				</p>
				<h2 id="coding-question-practice">Coding Question Practice</h2>
				<pre>
					<code>
						Why is this here? I&#39;m not ready to interview.
					</code>
				</pre>
				<p>
					<a href="#3-do-coding-interview-questions-while-youre-learning">
						Then go back and read this.
					</a>
				</p>
				<p>Why you need to practice doing programming problems:</p>
				<ul>
					<li>
						Problem recognition, and where the right data structures
						and algorithms fit in
					</li>
					<li>Gathering requirements for the problem</li>
					<li>
						Talking your way through the problem like you will in
						the interview
					</li>
					<li>Coding on a whiteboard or paper, not a computer</li>
					<li>
						Coming up with time and space complexity for your
						solutions (see Big-O below)
					</li>
					<li>Testing your solutions</li>
				</ul>
				<p>
					There is a great intro for methodical, communicative problem
					solving in an interview. You&#39;ll get this from the
					programming interview books, too, but I found this
					outstanding:
					<a href="http://www.hiredintech.com/algorithm-design/">
						Algorithm design canvas
					</a>
				</p>
				<p>
					Write code on a whiteboard or paper, not a computer. Test
					with some sample inputs. Then type it and test it out on a
					computer.
				</p>
				<p>
					If you don&#39;t have a whiteboard at home, pick up a large
					drawing pad from an art store. You can sit on the couch and
					practice. This is my &quot;sofa whiteboard&quot;. I added
					the pen in the photo just for scale. If you use a pen,
					you&#39;ll wish you could erase. Gets messy quick.{" "}
					<strong>I use a pencil and eraser.</strong>
				</p>
				<p>
					<img
						src="https://d3j2pkmjtin6ou.cloudfront.net/art_board_sm_2.jpg"
						alt="my sofa whiteboard"
					/>
				</p>
				<p>
					<strong>
						Coding question practice is not about memorizing answers
						to programming problems.
					</strong>
				</p>
				<h2 id="coding-problems">Coding Problems</h2>
				<p>
					Don&#39;t forget your key coding interview books{" "}
					<a href="#interview-prep-books">here</a>.
				</p>
				<p>Solving Problems:</p>
				<ul>
					<li>
						<a href="https://www.topcoder.com/thrive/articles/How%20To%20Find%20a%20Solution">
							How to Find a Solution
						</a>
					</li>
					<li>
						<a href="https://www.topcoder.com/thrive/articles/How%20To%20Dissect%20a%20Topcoder%20Problem%20Statement%20Content">
							How to Dissect a Topcoder Problem Statement
						</a>
					</li>
				</ul>
				<p>Coding Interview Question Videos:</p>
				<ul>
					<li>
						<a href="https://www.youtube.com/playlist?list=PLamzFoFxwoNjPfxzaWqs7cZGsPYy0x_gI">
							IDeserve (88 videos)
						</a>
					</li>
					<li>
						<a href="https://www.youtube.com/user/tusharroy2525/playlists?shelf_id=2&amp;view=50&amp;sort=dd">
							Tushar Roy (5 playlists)
						</a>
						<ul>
							<li>Super for walkthroughs of problem solutions</li>
						</ul>
					</li>
					<li>
						<a href="https://www.youtube.com/playlist?list=PLU_sdQYzUj2keVENTP0a5rdykRSgg9Wp-">
							Nick White - LeetCode Solutions (187 Videos)
						</a>
						<ul>
							<li>Good explanations of solution and the code</li>
							<li>You can watch several in a short time</li>
						</ul>
					</li>
					<li>
						<a href="https://youtube.com/FisherCoder">
							FisherCoder - LeetCode Solutions
						</a>
					</li>
				</ul>
				<p>Challenge/Practice sites:</p>
				<ul>
					<li>
						<a href="https://leetcode.com/">LeetCode</a>
						<ul>
							<li>
								My favorite coding problem site. It&#39;s worth
								the subscription money for the 1-2 months
								you&#39;ll likely be preparing.
							</li>
							<li>
								See Nick White and FisherCoder Videos above for
								code walk-throughs.
							</li>
						</ul>
					</li>
					<li>
						<a href="https://www.hackerrank.com/">HackerRank</a>
					</li>
					<li>
						<a href="https://www.topcoder.com/">TopCoder</a>
					</li>
					<li>
						<a href="https://codeforces.com/">Codeforces</a>
					</li>
					<li>
						<a href="https://codility.com/programmers/">Codility</a>
					</li>
					<li>
						<a href="https://practice.geeksforgeeks.org/explore/?page=1">
							Geeks for Geeks
						</a>
					</li>
					<li>
						<a href="https://www.algoexpert.io/product">
							AlgoExpert
						</a>
						<ul>
							<li>
								Created by Google engineers, this is also an
								excellent resource to hone your skills.
							</li>
						</ul>
					</li>
					<li>
						<a href="https://projecteuler.net/">Project Euler</a>
						<ul>
							<li>
								very math focused, and not really suited for
								coding interviews
							</li>
						</ul>
					</li>
				</ul>
				<h2 id="lets-get-started">Let&#39;s Get Started</h2>
				<p>Alright, enough talk, let&#39;s learn!</p>
				<p>
					But don&#39;t forget to do coding problems from above while
					you learn!
				</p>
				<h2 id="algorithmic-complexity--big-o--asymptotic-analysis">
					Algorithmic complexity / Big-O / Asymptotic analysis
				</h2>
				<ul>
					<li>
						Nothing to implement here, you&#39;re just watching
						videos and taking notes! Yay!
					</li>
					<li>
						There are a lot of videos here. Just watch enough until
						you understand it. You can always come back and review.
					</li>
					<li>
						Don&#39;t worry if you don&#39;t understand all the math
						behind it.
					</li>
					<li>
						You just need to understand how to express the
						complexity of an algorithm in terms of Big-O.
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="0"
							checked={checked[0]}
							size="medium"
						/>{" "}
						<a href="https://www.youtube.com/watch?v=iOq5kSKqeR4">
							Harvard CS50 - Asymptotic Notation (video)
						</a>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="1"
							checked={checked[1]}
							size="medium"
						/>{" "}
						<a href="https://www.youtube.com/watch?v=V6mKVRU1evU">
							Big O Notations (general quick tutorial) (video)
						</a>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="2"
							checked={checked[2]}
							size="medium"
						/>{" "}
						<a href="https://www.youtube.com/watch?v=ei-A_wy5Yxw&amp;index=2&amp;list=PL1BaGV1cIH4UhkL8a9bJGG356covJ76qN">
							Big O Notation (and Omega and Theta) - best
							mathematical explanation (video)
						</a>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="3"
							checked={checked[3]}
							size="medium"
						/>{" "}
						<a href="https://www.youtube.com/watch?v=z1mkCe3kVUA">
							Skiena (video)
						</a>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="4"
							checked={checked[4]}
							size="medium"
						/>{" "}
						<a href="https://archive.org/details/ucberkeley_webcast_VIS4YDpuP98">
							UC Berkeley Big O (video)
						</a>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="5"
							checked={checked[5]}
							size="medium"
						/>{" "}
						<a href="https://www.youtube.com/watch?v=B3SpQZaAZP4&amp;index=10&amp;list=PL1BaGV1cIH4UhkL8a9bJGG356covJ76qN">
							Amortized Analysis (video)
						</a>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="6"
							checked={checked[6]}
							size="medium"
						/>{" "}
						TopCoder (includes recurrence relations and master
						theorem):
						<ul>
							<li>
								<a href="https://www.topcoder.com/thrive/articles/Computational%20Complexity%20part%20one">
									Computational Complexity: Section 1
								</a>
							</li>
							<li>
								<a href="https://www.topcoder.com/thrive/articles/Computational%20Complexity%20part%20two">
									Computational Complexity: Section 2
								</a>
							</li>
						</ul>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="7"
							checked={checked[7]}
							size="medium"
						/>{" "}
						<a href="http://bigocheatsheet.com/">Cheat sheet</a>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="8"
							checked={checked[8]}
							size="medium"
						/>{" "}
						<a href="https://youtu.be/__vX2sjlpXU">
							[Review] Big-O notation in 5 minutes (video)
						</a>
					</li>
				</ul>
				<p>Well, that&#39;s about enough of that. </p>
				<p>
					When you go through &quot;Cracking the Coding
					Interview&quot;, there is a chapter on this, and at the end
					there is a quiz to see if you can identify the runtime
					complexity of different algorithms. It&#39;s a super review
					and test.
				</p>
				<h2 id="data-structures">Data Structures</h2>
				<ul>
					<li>
						<h3 id="arrays">Arrays</h3>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="9"
									checked={checked[9]}
									size="medium"
								/>{" "}
								About Arrays:
								<ul>
									<li>
										<a href="https://www.youtube.com/watch?v=tI_tIZFyKBw&amp;t=3009s">
											Arrays CS50 Harvard University
										</a>
									</li>
									<li>
										<a href="https://www.coursera.org/lecture/data-structures/arrays-OsBSF">
											Arrays (video)
										</a>
									</li>
									<li>
										<a href="https://archive.org/details/ucberkeley_webcast_Wp8oiO_CZZE">
											UC Berkeley CS61B - Linear and
											Multi-Dim Arrays (video)
										</a>{" "}
										(Start watching from 15m 32s)
									</li>
									<li>
										<a href="https://www.coursera.org/lecture/data-structures/dynamic-arrays-EwbnV">
											Dynamic Arrays (video)
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=1jtrQqYpt7g">
											Jagged Arrays (video)
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="10"
									checked={checked[10]}
									size="medium"
								/>{" "}
								Implement a vector (mutable array with automatic
								resizing):
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="11"
											checked={checked[11]}
											size="medium"
										/>{" "}
										Practice coding using arrays and
										pointers, and pointer math to jump to an
										index instead of using indexing.
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="12"
											checked={checked[12]}
											size="medium"
										/>{" "}
										New raw data array with allocated memory
										<ul>
											<li>
												can allocate int array under the
												hood, just not use its features
											</li>
											<li>
												start with 16, or if starting
												number is greater, use power of
												2 - 16, 32, 64, 128
											</li>
										</ul>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="13"
											checked={checked[13]}
											size="medium"
										/>{" "}
										size() - number of items
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="14"
											checked={checked[14]}
											size="medium"
										/>{" "}
										capacity() - number of items it can hold
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="15"
											checked={checked[15]}
											size="medium"
										/>{" "}
										is_empty()
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="16"
											checked={checked[16]}
											size="medium"
										/>{" "}
										at(index) - returns item at given index,
										blows up if index out of bounds
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="17"
											checked={checked[17]}
											size="medium"
										/>{" "}
										push(item)
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="18"
											checked={checked[18]}
											size="medium"
										/>{" "}
										insert(index, item) - inserts item at
										index, shifts that index&#39;s value and
										trailing elements to the right
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="19"
											checked={checked[19]}
											size="medium"
										/>{" "}
										prepend(item) - can use insert above at
										index 0
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="20"
											checked={checked[20]}
											size="medium"
										/>{" "}
										pop() - remove from end, return value
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="21"
											checked={checked[21]}
											size="medium"
										/>{" "}
										delete(index) - delete item at index,
										shifting all trailing elements left
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="22"
											checked={checked[22]}
											size="medium"
										/>{" "}
										remove(item) - looks for value and
										removes index holding it (even if in
										multiple places)
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="23"
											checked={checked[23]}
											size="medium"
										/>{" "}
										find(item) - looks for value and returns
										first index with that value, -1 if not
										found
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="24"
											checked={checked[24]}
											size="medium"
										/>{" "}
										resize(new_capacity) // private function
										<ul>
											<li>
												when you reach capacity, resize
												to double the size
											</li>
											<li>
												when popping an item, if size is
												1/4 of capacity, resize to half
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="25"
									checked={checked[25]}
									size="medium"
								/>{" "}
								Time
								<ul>
									<li>
										O(1) to add/remove at end (amortized for
										allocations for more space), index, or
										update
									</li>
									<li>O(n) to insert/remove elsewhere</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="26"
									checked={checked[26]}
									size="medium"
								/>{" "}
								Space
								<ul>
									<li>
										contiguous in memory, so proximity helps
										performance
									</li>
									<li>
										space needed = (array capacity, which is
										&gt;= n) * size of item, but even if 2n,
										still O(n)
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="linked-lists">Linked Lists</h3>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="27"
									checked={checked[27]}
									size="medium"
								/>{" "}
								Description:
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="28"
											checked={checked[28]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=2T-A_GFuoTo&amp;t=650s">
											Linked Lists CS50 Harvard University
										</a>{" "}
										- this builds the intuition.
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="29"
											checked={checked[29]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/lecture/data-structures/singly-linked-lists-kHhgK">
											Singly Linked Lists (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="30"
											checked={checked[30]}
											size="medium"
										/>{" "}
										<a href="https://archive.org/details/ucberkeley_webcast_htzJdKoEmO0">
											CS 61B - Linked Lists 1 (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="31"
											checked={checked[31]}
											size="medium"
										/>{" "}
										<a href="https://archive.org/details/ucberkeley_webcast_-c4I3gFYe3w">
											CS 61B - Linked Lists 2 (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="32"
											checked={checked[32]}
											size="medium"
										/>{" "}
										<a href="https://youtu.be/F8AbOfQwl1c">
											[Review] Linked lists in 4 minutes
											(video)
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="33"
									checked={checked[33]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=QN6FPiD0Gzo">
									C Code (video)
								</a>
								- not the whole video, just portions about Node
								struct and memory allocation
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="34"
									checked={checked[34]}
									size="medium"
								/>{" "}
								Linked List vs Arrays:
								<ul>
									<li>
										<a href="https://www.coursera.org/lecture/data-structures-optimizing-performance/core-linked-lists-vs-arrays-rjBs9">
											Core Linked Lists Vs Arrays (video)
										</a>
									</li>
									<li>
										<a href="https://www.coursera.org/lecture/data-structures-optimizing-performance/in-the-real-world-lists-vs-arrays-QUaUd">
											In The Real World Linked Lists Vs
											Arrays (video)
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="35"
									checked={checked[35]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=YQs6IC-vgmo">
									Why you should avoid linked lists (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="36"
									checked={checked[36]}
									size="medium"
								/>{" "}
								Gotcha: you need pointer to pointer knowledge:
								(for when you pass a pointer to a function that
								may change the address where that pointer
								points) This page is just to get a grasp on ptr
								to ptr. I don&#39;t recommend this list
								traversal style. Readability and maintainability
								suffer due to cleverness.
								<ul>
									<li>
										<a href="https://www.eskimo.com/~scs/cclass/int/sx8.html">
											Pointers to Pointers
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="37"
									checked={checked[37]}
									size="medium"
								/>{" "}
								Implement (I did with tail pointer &amp;
								without):
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="38"
											checked={checked[38]}
											size="medium"
										/>{" "}
										size() - returns number of data elements
										in list
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="39"
											checked={checked[39]}
											size="medium"
										/>{" "}
										empty() - bool returns true if empty
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="40"
											checked={checked[40]}
											size="medium"
										/>{" "}
										value_at(index) - returns the value of
										the nth item (starting at 0 for first)
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="41"
											checked={checked[41]}
											size="medium"
										/>{" "}
										push_front(value) - adds an item to the
										front of the list
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="42"
											checked={checked[42]}
											size="medium"
										/>{" "}
										pop_front() - remove front item and
										return its value
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="43"
											checked={checked[43]}
											size="medium"
										/>{" "}
										push_back(value) - adds an item at the
										end
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="44"
											checked={checked[44]}
											size="medium"
										/>{" "}
										pop_back() - removes end item and
										returns its value
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="45"
											checked={checked[45]}
											size="medium"
										/>{" "}
										front() - get value of front item
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="46"
											checked={checked[46]}
											size="medium"
										/>{" "}
										back() - get value of end item
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="47"
											checked={checked[47]}
											size="medium"
										/>{" "}
										insert(index, value) - insert value at
										index, so current item at that index is
										pointed to by new item at index
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="48"
											checked={checked[48]}
											size="medium"
										/>{" "}
										erase(index) - removes node at given
										index
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="49"
											checked={checked[49]}
											size="medium"
										/>{" "}
										value_n_from_end(n) - returns the value
										of the node at nth position from the end
										of the list
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="50"
											checked={checked[50]}
											size="medium"
										/>{" "}
										reverse() - reverses the list
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="51"
											checked={checked[51]}
											size="medium"
										/>{" "}
										remove_value(value) - removes the first
										item in the list with this value
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="52"
									checked={checked[52]}
									size="medium"
								/>{" "}
								Doubly-linked List
								<ul>
									<li>
										<a href="https://www.coursera.org/lecture/data-structures/doubly-linked-lists-jpGKD">
											Description (video)
										</a>
									</li>
									<li>No need to implement</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="stack">Stack</h3>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="53"
									checked={checked[53]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/lecture/data-structures/stacks-UdKzQ">
									Stacks (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="54"
									checked={checked[54]}
									size="medium"
								/>{" "}
								<a href="https://youtu.be/KcT3aVgrrpU">
									[Review] Stacks in 3 minutes (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="55"
									checked={checked[55]}
									size="medium"
								/>{" "}
								Will not implement. Implementing with array is
								trivial
							</li>
						</ul>
					</li>
					<li>
						<h3 id="queue">Queue</h3>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="56"
									checked={checked[56]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/lecture/data-structures/queues-EShpq">
									Queue (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="57"
									checked={checked[57]}
									size="medium"
								/>{" "}
								<a href="https://en.wikipedia.org/wiki/Circular_buffer">
									Circular buffer/FIFO
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="58"
									checked={checked[58]}
									size="medium"
								/>{" "}
								<a href="https://youtu.be/D6gu-_tmEpQ">
									[Review] Queues in 3 minutes (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="59"
									checked={checked[59]}
									size="medium"
								/>{" "}
								Implement using linked-list, with tail pointer:
								<ul>
									<li>
										enqueue(value) - adds value at position
										at tail
									</li>
									<li>
										dequeue() - returns value and removes
										least recently added element (front)
									</li>
									<li>empty()</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="60"
									checked={checked[60]}
									size="medium"
								/>{" "}
								Implement using fixed-sized array:
								<ul>
									<li>
										enqueue(value) - adds item at end of
										available storage
									</li>
									<li>
										dequeue() - returns value and removes
										least recently added element
									</li>
									<li>empty()</li>
									<li>full()</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="61"
									checked={checked[61]}
									size="medium"
								/>{" "}
								Cost:
								<ul>
									<li>
										a bad implementation using linked list
										where you enqueue at head and dequeue at
										tail would be O(n) because you&#39;d
										need the next to last element, causing a
										full traversal each dequeue
									</li>
									<li>
										enqueue: O(1) (amortized, linked list
										and array [probing])
									</li>
									<li>
										dequeue: O(1) (linked list and array)
									</li>
									<li>empty: O(1) (linked list and array)</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="hash-table">Hash table</h3>
						<ul>
							<li>
								<p className="with-check">
									<Checkbox
										onClick={(e) => handleCheckClick(e)}
										id="62"
										checked={checked[62]}
										size="medium"
									/>
									Videos:
								</p>
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="63"
											checked={checked[63]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=0M_kIqhwbFo&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&amp;index=8">
											Hashing with Chaining (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="64"
											checked={checked[64]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=BRO7mVIFt08&amp;index=9&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb">
											Table Doubling, Karp-Rabin (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="65"
											checked={checked[65]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=rvdJDijO2Ro&amp;index=10&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb">
											Open Addressing, Cryptographic
											Hashing (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="66"
											checked={checked[66]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=C4Kc8xzcA68">
											PyCon 2010: The Mighty Dictionary
											(video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="67"
											checked={checked[67]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=66P5FMkWoVU">
											PyCon 2017: The Dictionary Even
											Mightier (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="68"
											checked={checked[68]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=z0lJ2k0sl1g&amp;list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&amp;index=11">
											(Advanced) Randomization: Universal
											&amp; Perfect Hashing (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="69"
											checked={checked[69]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=N0COwN14gt0&amp;list=PL2B4EEwhKD-NbwZ4ezj7gyc_3yNrojKM9&amp;index=4">
											(Advanced) Perfect hashing (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="70"
											checked={checked[70]}
											size="medium"
										/>{" "}
										<a href="https://youtu.be/knV86FlSXJ8">
											[Review] Hash tables in 4 minutes
											(video)
										</a>
									</li>
								</ul>
							</li>
							<li>
								<p className="with-check">
									<Checkbox
										onClick={(e) => handleCheckClick(e)}
										id="71"
										checked={checked[71]}
										size="medium"
									/>
									Online Courses:
								</p>
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="72"
											checked={checked[72]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/lecture/data-structures-optimizing-performance/core-hash-tables-m7UuP">
											Core Hash Tables (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="73"
											checked={checked[73]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/learn/data-structures/home/week/4">
											Data Structures (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="74"
											checked={checked[74]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/lecture/data-structures/phone-book-problem-NYZZP">
											Phone Book Problem (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="75"
											checked={checked[75]}
											size="medium"
										/>{" "}
										distributed hash tables:
										<ul>
											<li>
												<a href="https://www.coursera.org/lecture/data-structures/instant-uploads-and-storage-optimization-in-dropbox-DvaIb">
													Instant Uploads And Storage
													Optimization In Dropbox
													(video)
												</a>
											</li>
											<li>
												<a href="https://www.coursera.org/lecture/data-structures/distributed-hash-tables-tvH8H">
													Distributed Hash Tables
													(video)
												</a>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								<p className="with-check">
									<Checkbox
										onClick={(e) => handleCheckClick(e)}
										id="76"
										checked={checked[76]}
										size="medium"
									/>
									Implement with array using linear probing
								</p>
								<ul>
									<li>
										hash(k, m) - m is size of hash table
									</li>
									<li>
										add(key, value) - if key already exists,
										update value
									</li>
									<li>exists(key)</li>
									<li>get(key)</li>
									<li>remove(key)</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
				<h2 id="more-knowledge">More Knowledge</h2>
				<ul>
					<li>
						<h3 id="binary-search">Binary search</h3>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="77"
									checked={checked[77]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=D5SrAga1pno">
									Binary Search (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="78"
									checked={checked[78]}
									size="medium"
								/>{" "}
								<a href="https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search">
									Binary Search (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="79"
									checked={checked[79]}
									size="medium"
								/>{" "}
								<a href="https://www.topcoder.com/thrive/articles/Binary%20Search">
									detail
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="80"
									checked={checked[80]}
									size="medium"
								/>{" "}
								<a href="https://leetcode.com/discuss/general-discussion/786126/python-powerful-ultimate-binary-search-template-solved-many-problems">
									blueprint
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="81"
									checked={checked[81]}
									size="medium"
								/>{" "}
								<a href="https://youtu.be/fDKIpRe8GW4">
									[Review] Binary search in 4 minutes (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="82"
									checked={checked[82]}
									size="medium"
								/>{" "}
								Implement:
								<ul>
									<li>
										binary search (on sorted array of
										integers)
									</li>
									<li>binary search using recursion</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="bitwise-operations">Bitwise operations</h3>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="83"
									checked={checked[83]}
									size="medium"
								/>{" "}
								<a href="https://github.com/jwasham/coding-interview-university/blob/main/extras/cheat%20sheets/bits-cheat-sheet.pdf">
									Bits cheat sheet
								</a>{" "}
								- you should know many of the powers of 2 from
								(2^1 to 2^16 and 2^32)
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="84"
									checked={checked[84]}
									size="medium"
								/>{" "}
								Get a really good understanding of manipulating
								bits with: &amp;, |, ^, ~, &gt;&gt;, &lt;&lt;
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="85"
											checked={checked[85]}
											size="medium"
										/>{" "}
										<a href="https://en.wikipedia.org/wiki/Word_(computer_architecture)">
											words
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="86"
											checked={checked[86]}
											size="medium"
										/>{" "}
										Good intro:
										<a href="https://www.youtube.com/watch?v=7jkIUgLC29I">
											Bit Manipulation (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="87"
											checked={checked[87]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=d0AwjSpNXR0">
											C Programming Tutorial 2-10: Bitwise
											Operators (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="88"
											checked={checked[88]}
											size="medium"
										/>{" "}
										<a href="https://en.wikipedia.org/wiki/Bit_manipulation">
											Bit Manipulation
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="89"
											checked={checked[89]}
											size="medium"
										/>{" "}
										<a href="https://en.wikipedia.org/wiki/Bitwise_operation">
											Bitwise Operation
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="90"
											checked={checked[90]}
											size="medium"
										/>{" "}
										<a href="https://graphics.stanford.edu/~seander/bithacks.html">
											Bithacks
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="91"
											checked={checked[91]}
											size="medium"
										/>{" "}
										<a href="https://bits.stephan-brumme.com/">
											The Bit Twiddler
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="92"
											checked={checked[92]}
											size="medium"
										/>{" "}
										<a href="https://bits.stephan-brumme.com/interactive.html">
											The Bit Twiddler Interactive
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="93"
											checked={checked[93]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=ZusiKXcz_ac">
											Bit Hacks (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="94"
											checked={checked[94]}
											size="medium"
										/>{" "}
										<a href="https://pconrad.github.io/old_pconrad_cs16/topics/bitOps/">
											Practice Operations
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="95"
									checked={checked[95]}
									size="medium"
								/>{" "}
								2s and 1s complement
								<ul>
									<li>
										<a href="https://www.youtube.com/watch?v=lKTsv6iVxV4">
											Binary: Plusses &amp; Minuses (Why
											We Use Two&#39;s Complement) (video)
										</a>
									</li>
									<li>
										<a href="https://en.wikipedia.org/wiki/Ones%27_complement">
											1s Complement
										</a>
									</li>
									<li>
										<a href="https://en.wikipedia.org/wiki/Two%27s_complement">
											2s Complement
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="96"
									checked={checked[96]}
									size="medium"
								/>{" "}
								Count set bits
								<ul>
									<li>
										<a href="https://youtu.be/Hzuzo9NJrlc">
											4 ways to count bits in a byte
											(video)
										</a>
									</li>
									<li>
										<a href="https://graphics.stanford.edu/~seander/bithacks.html#CountBitsSetKernighan">
											Count Bits
										</a>
									</li>
									<li>
										<a href="http://stackoverflow.com/questions/109023/how-to-count-the-number-of-set-bits-in-a-32-bit-integer">
											How To Count The Number Of Set Bits
											In a 32 Bit Integer
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="97"
									checked={checked[97]}
									size="medium"
								/>{" "}
								Swap values:
								<ul>
									<li>
										<a href="https://bits.stephan-brumme.com/swap.html">
											Swap
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="98"
									checked={checked[98]}
									size="medium"
								/>{" "}
								Absolute value:
								<ul>
									<li>
										<a href="https://bits.stephan-brumme.com/absInteger.html">
											Absolute Integer
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
				<h2 id="trees">Trees</h2>
				<ul>
					<li>
						<h3 id="trees---intro">Trees - Intro</h3>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="99"
									checked={checked[99]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/lecture/data-structures/trees-95qda">
									Intro to Trees (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="100"
									checked={checked[100]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/lecture/data-structures/tree-traversal-fr51b">
									Tree Traversal (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="101"
									checked={checked[101]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=uWL6FJhq5fM">
									BFS(breadth-first search) and
									DFS(depth-first search) (video)
								</a>
								<ul>
									<li>
										BFS notes:
										<ul>
											<li>
												level order (BFS, using queue)
											</li>
											<li>time complexity: O(n)</li>
											<li>
												space complexity: best: O(1),
												worst: O(n/2)=O(n)
											</li>
										</ul>
									</li>
									<li>
										DFS notes:
										<ul>
											<li>time complexity: O(n)</li>
											<li>
												space complexity: best: O(log n)
												- avg. height of tree worst:
												O(n)
											</li>
											<li>
												inorder (DFS: left, self, right)
											</li>
											<li>
												postorder (DFS: left, right,
												self)
											</li>
											<li>
												preorder (DFS: self, left,
												right)
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="102"
									checked={checked[102]}
									size="medium"
								/>{" "}
								<a href="https://youtu.be/HZ5YTanv5QE">
									[Review] Breadth-first search in 4 minutes
									(video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="103"
									checked={checked[103]}
									size="medium"
								/>{" "}
								<a href="https://youtu.be/Urx87-NMm6c">
									[Review] Depth-first search in 4 minutes
									(video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="104"
									checked={checked[104]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/playlist?list=PL9xmBV_5YoZO1JC2RgEi04nLy6D-rKk6b">
									[Review] Tree Traversal (playlist) in 11
									minutes (video)
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="binary-search-trees-bsts">
							Binary search trees: BSTs
						</h3>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="105"
									checked={checked[105]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=x6At0nzX92o&amp;index=1&amp;list=PLA5Lqm4uh9Bbq-E0ZnqTIa8LRaL77ica6">
									Binary Search Tree Review (video)
								</a>{" "}
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="106"
									checked={checked[106]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/learn/data-structures/lecture/E7cXP/introduction">
									Introduction (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="107"
									checked={checked[107]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=76dhtgZt38A&amp;ab_channel=MITOpenCourseWare">
									MIT (video)
								</a>
							</li>
							<li>
								C/C++:
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="108"
											checked={checked[108]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=COZK7NATh4k&amp;list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&amp;index=28">
											Binary search tree - Implementation
											in C/C++ (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="109"
											checked={checked[109]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=hWokyBoo0aI&amp;list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&amp;index=29">
											BST implementation - memory
											allocation in stack and heap (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="110"
											checked={checked[110]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=Ut90klNN264&amp;index=30&amp;list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P">
											Find min and max element in a binary
											search tree (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="111"
											checked={checked[111]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=_pnqMz5nrRs&amp;list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&amp;index=31">
											Find height of a binary tree (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="112"
											checked={checked[112]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=9RHO6jU--GU&amp;list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&amp;index=32">
											Binary tree traversal -
											breadth-first and depth-first
											strategies (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="113"
											checked={checked[113]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=86g8jAQug04&amp;index=33&amp;list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P">
											Binary tree: Level Order Traversal
											(video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="114"
											checked={checked[114]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=gm8DUJJhmY4&amp;index=34&amp;list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P">
											Binary tree traversal: Preorder,
											Inorder, Postorder (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="115"
											checked={checked[115]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=yEwSGhSsT0U&amp;index=35&amp;list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P">
											Check if a binary tree is binary
											search tree or not (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="116"
											checked={checked[116]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=gcULXE7ViZw&amp;list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&amp;index=36">
											Delete a node from Binary Search
											Tree (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="117"
											checked={checked[117]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=5cPbNCrdotA&amp;index=37&amp;list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P">
											Inorder Successor in a binary search
											tree (video)
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="118"
									checked={checked[118]}
									size="medium"
								/>{" "}
								Implement:
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="119"
											checked={checked[119]}
											size="medium"
										/>{" "}
										insert // insert value into tree
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="120"
											checked={checked[120]}
											size="medium"
										/>{" "}
										get_node_count // get count of values
										stored
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="121"
											checked={checked[121]}
											size="medium"
										/>{" "}
										print_values // prints the values in the
										tree, from min to max
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="122"
											checked={checked[122]}
											size="medium"
										/>{" "}
										delete_tree
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="123"
											checked={checked[123]}
											size="medium"
										/>{" "}
										is_in_tree // returns true if given
										value exists in the tree
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="124"
											checked={checked[124]}
											size="medium"
										/>{" "}
										get_height // returns the height in
										nodes (single node&#39;s height is 1)
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="125"
											checked={checked[125]}
											size="medium"
										/>{" "}
										get_min // returns the minimum value
										stored in the tree
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="126"
											checked={checked[126]}
											size="medium"
										/>{" "}
										get_max // returns the maximum value
										stored in the tree
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="127"
											checked={checked[127]}
											size="medium"
										/>{" "}
										is_binary_search_tree
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="128"
											checked={checked[128]}
											size="medium"
										/>{" "}
										delete_value
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="129"
											checked={checked[129]}
											size="medium"
										/>{" "}
										get_successor // returns next-highest
										value in tree after given value, -1 if
										none
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="heap--priority-queue--binary-heap">
							Heap / Priority Queue / Binary Heap
						</h3>
						<ul>
							<li>
								visualized as a tree, but is usually linear in
								storage (array, linked list)
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="130"
									checked={checked[130]}
									size="medium"
								/>{" "}
								<a href="https://en.wikipedia.org/wiki/Heap_(data_structure)">
									Heap
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="131"
									checked={checked[131]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/lecture/data-structures/introduction-2OpTs">
									Introduction (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="132"
									checked={checked[132]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/learn/data-structures/lecture/GRV2q/binary-trees">
									Binary Trees (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="133"
									checked={checked[133]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/learn/data-structures/supplement/S5xxz/tree-height-remark">
									Tree Height Remark (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="134"
									checked={checked[134]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/learn/data-structures/lecture/0g1dl/basic-operations">
									Basic Operations (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="135"
									checked={checked[135]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/learn/data-structures/lecture/gl5Ni/complete-binary-trees">
									Complete Binary Trees (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="136"
									checked={checked[136]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/learn/data-structures/lecture/HxQo9/pseudocode">
									Pseudocode (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="137"
									checked={checked[137]}
									size="medium"
								/>{" "}
								<a href="https://youtu.be/odNJmw5TOEE?list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&amp;t=3291">
									Heap Sort - jumps to start (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="138"
									checked={checked[138]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/lecture/data-structures/heap-sort-hSzMO">
									Heap Sort (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="139"
									checked={checked[139]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/lecture/data-structures/building-a-heap-dwrOS">
									Building a heap (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="140"
									checked={checked[140]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=B7hVxCmfPtM&amp;index=4&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb">
									MIT: Heaps and Heap Sort (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="141"
									checked={checked[141]}
									size="medium"
								/>{" "}
								<a href="https://archive.org/details/ucberkeley_webcast_yIUFT6AKBGE">
									CS 61B Lecture 24: Priority Queues (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="142"
									checked={checked[142]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=MiyLo8adrWw">
									Linear Time BuildHeap (max-heap)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="143"
									checked={checked[143]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/playlist?list=PL9xmBV_5YoZNsyqgPW-DNwUeT8F8uhWc6">
									[Review] Heap (playlist) in 13 minutes
									(video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="144"
									checked={checked[144]}
									size="medium"
								/>{" "}
								Implement a max-heap:
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="145"
											checked={checked[145]}
											size="medium"
										/>{" "}
										insert
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="146"
											checked={checked[146]}
											size="medium"
										/>{" "}
										sift_up - needed for insert
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="147"
											checked={checked[147]}
											size="medium"
										/>{" "}
										get_max - returns the max item, without
										removing it
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="148"
											checked={checked[148]}
											size="medium"
										/>{" "}
										get_size() - return number of elements
										stored
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="149"
											checked={checked[149]}
											size="medium"
										/>{" "}
										is_empty() - returns true if heap
										contains no elements
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="150"
											checked={checked[150]}
											size="medium"
										/>{" "}
										extract_max - returns the max item,
										removing it
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="151"
											checked={checked[151]}
											size="medium"
										/>{" "}
										sift_down - needed for extract_max
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="152"
											checked={checked[152]}
											size="medium"
										/>{" "}
										remove(x) - removes item at index x
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="153"
											checked={checked[153]}
											size="medium"
										/>{" "}
										heapify - create a heap from an array of
										elements, needed for heap_sort
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="154"
											checked={checked[154]}
											size="medium"
										/>{" "}
										heap_sort() - take an unsorted array and
										turn it into a sorted array in-place
										using a max heap or min heap
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
				<h2 id="sorting">Sorting</h2>
				<ul>
					<li className="with-check">
						<p className="">
							<Checkbox
								onClick={(e) => handleCheckClick(e)}
								id="155"
								checked={checked[155]}
								size="medium"
							/>
							Notes:
						</p>
						<ul>
							<li>
								Implement sorts &amp; know best case/worst case,
								average complexity of each:
								<ul>
									<li>
										no bubble sort - it&#39;s terrible -
										O(n^2), except when n &lt;= 16
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="156"
									checked={checked[156]}
									size="medium"
								/>{" "}
								Stability in sorting algorithms (&quot;Is
								Quicksort stable?&quot;)
								<ul>
									<li>
										<a href="https://en.wikipedia.org/wiki/Sorting_algorithm#Stability">
											Sorting Algorithm Stability
										</a>
									</li>
									<li>
										<a href="http://stackoverflow.com/questions/1517793/stability-in-sorting-algorithms">
											Stability In Sorting Algorithms
										</a>
									</li>
									<li>
										<a href="http://www.geeksforgeeks.org/stability-in-sorting-algorithms/">
											Stability In Sorting Algorithms
										</a>
									</li>
									<li>
										<a href="http://homepages.math.uic.edu/~leon/cs-mcs401-s08/handouts/stability.pdf">
											Sorting Algorithms - Stability
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="157"
									checked={checked[157]}
									size="medium"
								/>{" "}
								Which algorithms can be used on linked lists?
								Which on arrays? Which on both?
								<ul>
									<li>
										I wouldn&#39;t recommend sorting a
										linked list, but merge sort is doable.
									</li>
									<li>
										<a href="http://www.geeksforgeeks.org/merge-sort-for-linked-list/">
											Merge Sort For Linked List
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<p>
							For heapsort, see Heap data structure above. Heap
							sort is great, but not stable
						</p>
					</li>
					<li className="with-check">
						<p className="">
							<Checkbox
								onClick={(e) => handleCheckClick(e)}
								id="158"
								checked={checked[158]}
								size="medium"
							/>
							<a href="https://www.coursera.org/learn/algorithms-part1/home/week/3">
								Sedgewick - Mergesort (5 videos)
							</a>
						</p>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="159"
									checked={checked[159]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/lecture/algorithms-part1/mergesort-ARWDq">
									1. Mergesort
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="160"
									checked={checked[160]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/learn/algorithms-part1/lecture/PWNEl/bottom-up-mergesort">
									2. Bottom up Mergesort
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="161"
									checked={checked[161]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/lecture/algorithms-part1/sorting-complexity-xAltF">
									3. Sorting Complexity
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="162"
									checked={checked[162]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/lecture/algorithms-part1/comparators-9FYhS">
									4. Comparators
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="163"
									checked={checked[163]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/learn/algorithms-part1/lecture/pvvLZ/stability">
									5. Stability
								</a>
							</li>
						</ul>
					</li>
					<li className="with-check">
						<p className="">
							<Checkbox
								onClick={(e) => handleCheckClick(e)}
								id="164"
								checked={checked[164]}
								size="medium"
							/>
							<a href="https://www.coursera.org/learn/algorithms-part1/home/week/3">
								Sedgewick - Quicksort (4 videos)
							</a>
						</p>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="165"
									checked={checked[165]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/lecture/algorithms-part1/quicksort-vjvnC">
									1. Quicksort
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="166"
									checked={checked[166]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/lecture/algorithms-part1/selection-UQxFT">
									2. Selection
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="167"
									checked={checked[167]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/lecture/algorithms-part1/duplicate-keys-XvjPd">
									3. Duplicate Keys
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="168"
									checked={checked[168]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/lecture/algorithms-part1/system-sorts-QBNZ7">
									4. System Sorts
								</a>
							</li>
						</ul>
					</li>
					<li className="with-check">
						<p className="">
							<Checkbox
								onClick={(e) => handleCheckClick(e)}
								id="169"
								checked={checked[169]}
								size="medium"
							/>
							UC Berkeley:
						</p>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="170"
									checked={checked[170]}
									size="medium"
								/>{" "}
								<a href="https://archive.org/details/ucberkeley_webcast_EiUvYS2DT6I">
									CS 61B Lecture 29: Sorting I (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="171"
									checked={checked[171]}
									size="medium"
								/>{" "}
								<a href="https://archive.org/details/ucberkeley_webcast_2hTY3t80Qsk">
									CS 61B Lecture 30: Sorting II (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="172"
									checked={checked[172]}
									size="medium"
								/>{" "}
								<a href="https://archive.org/details/ucberkeley_webcast_Y6LOLpxg6Dc">
									CS 61B Lecture 32: Sorting III (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="173"
									checked={checked[173]}
									size="medium"
								/>{" "}
								<a href="https://archive.org/details/ucberkeley_webcast_qNMQ4ly43p4">
									CS 61B Lecture 33: Sorting V (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="174"
									checked={checked[174]}
									size="medium"
								/>{" "}
								<a href="https://archive.org/details/ucberkeley_webcast_pvbBMd-3NoI">
									CS 61B 2014-04-21: Radix Sort(video)
								</a>
							</li>
						</ul>
					</li>
					<li className="with-check">
						<p className="">
							<Checkbox
								onClick={(e) => handleCheckClick(e)}
								id="175"
								checked={checked[175]}
								size="medium"
							/>
							<a href="https://www.youtube.com/watch?v=P00xJgWzz2c&amp;index=1&amp;list=PL89B61F78B552C1AB">
								Bubble Sort (video)
							</a>
						</p>
					</li>
					<li className="with-check">
						<p className="">
							<Checkbox
								onClick={(e) => handleCheckClick(e)}
								id="176"
								checked={checked[176]}
								size="medium"
							/>
							<a href="https://www.youtube.com/watch?v=ni_zk257Nqo&amp;index=7&amp;list=PL89B61F78B552C1AB">
								Analyzing Bubble Sort (video)
							</a>
						</p>
					</li>
					<li className="with-check">
						<p className="">
							<Checkbox
								onClick={(e) => handleCheckClick(e)}
								id="177"
								checked={checked[177]}
								size="medium"
							/>
							<a href="https://www.youtube.com/watch?v=Kg4bqzAqRBM&amp;index=3&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb">
								Insertion Sort, Merge Sort (video)
							</a>
						</p>
					</li>
					<li className="with-check">
						<p className="">
							<Checkbox
								onClick={(e) => handleCheckClick(e)}
								id="178"
								checked={checked[178]}
								size="medium"
							/>
							<a href="https://www.youtube.com/watch?v=c4BRHC7kTaQ&amp;index=2&amp;list=PL89B61F78B552C1AB">
								Insertion Sort (video)
							</a>
						</p>
					</li>
					<li className="with-check">
						<p className="">
							<Checkbox
								onClick={(e) => handleCheckClick(e)}
								id="179"
								checked={checked[179]}
								size="medium"
							/>
							<a href="https://www.youtube.com/watch?v=GCae1WNvnZM&amp;index=3&amp;list=PL89B61F78B552C1AB">
								Merge Sort (video)
							</a>
						</p>
					</li>
					<li className="with-check">
						<p className="">
							<Checkbox
								onClick={(e) => handleCheckClick(e)}
								id="180"
								checked={checked[180]}
								size="medium"
							/>
							<a href="https://www.youtube.com/watch?v=y_G9BkAm6B8&amp;index=4&amp;list=PL89B61F78B552C1AB">
								Quicksort (video)
							</a>
						</p>
					</li>
					<li className="with-check">
						<p className="">
							<Checkbox
								onClick={(e) => handleCheckClick(e)}
								id="181"
								checked={checked[181]}
								size="medium"
							/>
							<a href="https://www.youtube.com/watch?v=6nDMgr0-Yyo&amp;index=8&amp;list=PL89B61F78B552C1AB">
								Selection Sort (video)
							</a>
						</p>
					</li>
					<li className="with-check">
						<p className="">
							<Checkbox
								onClick={(e) => handleCheckClick(e)}
								id="182"
								checked={checked[182]}
								size="medium"
							/>
							Merge sort code:
						</p>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="183"
									checked={checked[183]}
									size="medium"
								/>{" "}
								<a href="http://www.cs.yale.edu/homes/aspnes/classes/223/examples/sorting/mergesort.c">
									Using output array (C)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="184"
									checked={checked[184]}
									size="medium"
								/>{" "}
								<a href="https://github.com/jwasham/practice-python/blob/master/merge_sort/merge_sort.py">
									Using output array (Python)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="185"
									checked={checked[185]}
									size="medium"
								/>{" "}
								<a href="https://github.com/jwasham/practice-cpp/blob/master/merge_sort/merge_sort.cc">
									In-place (C++)
								</a>
							</li>
						</ul>
					</li>
					<li className="with-check">
						<p className="">
							<Checkbox
								onClick={(e) => handleCheckClick(e)}
								id="186"
								checked={checked[186]}
								size="medium"
							/>
							Quick sort code:
						</p>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="187"
									checked={checked[187]}
									size="medium"
								/>{" "}
								<a href="http://www.cs.yale.edu/homes/aspnes/classes/223/examples/randomization/quick.c">
									Implementation (C)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="188"
									checked={checked[188]}
									size="medium"
								/>{" "}
								<a href="https://github.com/jwasham/practice-c/blob/master/quick_sort/quick_sort.c">
									Implementation (C)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="189"
									checked={checked[189]}
									size="medium"
								/>{" "}
								<a href="https://github.com/jwasham/practice-python/blob/master/quick_sort/quick_sort.py">
									Implementation (Python)
								</a>
							</li>
						</ul>
					</li>
					<li className="with-check">
						<p className="">
							<Checkbox
								onClick={(e) => handleCheckClick(e)}
								id="190"
								checked={checked[190]}
								size="medium"
							/>
							<a href="https://www.youtube.com/playlist?list=PL9xmBV_5YoZOZSbGAXAPIq1BeUf4j20pl">
								[Review] Sorting (playlist) in 18 minutes
							</a>
						</p>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="191"
									checked={checked[191]}
									size="medium"
								/>{" "}
								<a href="https://youtu.be/Hoixgm4-P4M">
									Quick sort in 4 minutes (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="192"
									checked={checked[192]}
									size="medium"
								/>{" "}
								<a href="https://youtu.be/2DmK_H7IdTo">
									Heap sort in 4 minutes (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="193"
									checked={checked[193]}
									size="medium"
								/>{" "}
								<a href="https://youtu.be/4VqmGXwpLqc">
									Merge sort in 3 minutes (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="194"
									checked={checked[194]}
									size="medium"
								/>{" "}
								<a href="https://youtu.be/xli_FI7CuzA">
									Bubble sort in 2 minutes (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="195"
									checked={checked[195]}
									size="medium"
								/>{" "}
								<a href="https://youtu.be/g-PGLbMth_g">
									Selection sort in 3 minutes (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="196"
									checked={checked[196]}
									size="medium"
								/>{" "}
								<a href="https://youtu.be/JU767SDMDvA">
									Insertion sort in 2 minutes (video)
								</a>
							</li>
						</ul>
					</li>
					<li className="with-check">
						<p className="">
							<Checkbox
								onClick={(e) => handleCheckClick(e)}
								id="197"
								checked={checked[197]}
								size="medium"
							/>
							Implement:
						</p>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="198"
									checked={checked[198]}
									size="medium"
								/>{" "}
								Mergesort: O(n log n) average and worst case
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="199"
									checked={checked[199]}
									size="medium"
								/>{" "}
								Quicksort O(n log n) average case
							</li>
							<li>
								Selection sort and insertion sort are both
								O(n^2) average and worst case
							</li>
							<li>For heapsort, see Heap data structure above</li>
						</ul>
					</li>
					<li className="with-check">
						<p className="">
							<Checkbox
								onClick={(e) => handleCheckClick(e)}
								id="200"
								checked={checked[200]}
								size="medium"
							/>
							Not required, but I recommended them:
						</p>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="201"
									checked={checked[201]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/learn/algorithms-part2/home/week/3">
									Sedgewick - Radix Sorts (6 videos)
								</a>
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="202"
											checked={checked[202]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/learn/algorithms-part2/lecture/vGHvb/strings-in-java">
											1. Strings in Java
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="203"
											checked={checked[203]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/lecture/algorithms-part2/key-indexed-counting-2pi1Z">
											2. Key Indexed Counting
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="204"
											checked={checked[204]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/learn/algorithms-part2/lecture/c1U7L/lsd-radix-sort">
											3. Least Significant Digit First
											String Radix Sort
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="205"
											checked={checked[205]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/learn/algorithms-part2/lecture/gFxwG/msd-radix-sort">
											4. Most Significant Digit First
											String Radix Sort
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="206"
											checked={checked[206]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/lecture/algorithms-part2/3-way-radix-quicksort-crkd5">
											5. 3 Way Radix Quicksort
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="207"
											checked={checked[207]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/learn/algorithms-part2/lecture/TH18W/suffix-arrays">
											6. Suffix Arrays
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="208"
									checked={checked[208]}
									size="medium"
								/>{" "}
								<a href="http://www.cs.yale.edu/homes/aspnes/classes/223/notes.html#radixSort">
									Radix Sort
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="209"
									checked={checked[209]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=xhr26ia4k38">
									Radix Sort (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="210"
									checked={checked[210]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=Nz1KZXbghj8&amp;index=7&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb">
									Radix Sort, Counting Sort (linear time given
									constraints) (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="211"
									checked={checked[211]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=cNB2lADK3_s&amp;index=8&amp;list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp">
									Randomization: Matrix Multiply, Quicksort,
									Freivalds&#39; algorithm (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="212"
									checked={checked[212]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=pOKy3RZbSws&amp;list=PLUl4u3cNGP61hsJNdULdudlRL493b-XZf&amp;index=14">
									Sorting in Linear Time (video)
								</a>
							</li>
						</ul>
					</li>
				</ul>
				<p>
					As a summary, here is a visual representation of{" "}
					<a href="https://www.youtube.com/watch?v=kPRA0W1kECg">
						15 sorting algorithms
					</a>
					. If you need more detail on this subject, see
					&quot;Sorting&quot; section in{" "}
					<a href="#additional-detail-on-some-subjects">
						Additional Detail on Some Subjects
					</a>
				</p>
				<h2 id="graphs">Graphs</h2>
				<p>
					Graphs can be used to represent many problems in computer
					science, so this section is long, like trees and sorting
					were.
				</p>
				<ul>
					<li>
						<p>Notes:</p>
						<ul>
							<li>
								There are 4 basic ways to represent a graph in
								memory:
								<ul>
									<li>objects and pointers</li>
									<li>adjacency matrix</li>
									<li>adjacency list</li>
									<li>adjacency map</li>
								</ul>
							</li>
							<li>
								Familiarize yourself with each representation
								and its pros &amp; cons
							</li>
							<li>
								BFS and DFS - know their computational
								complexity, their trade offs, and how to
								implement them in real code
							</li>
							<li>
								When asked a question, look for a graph-based
								solution first, then move on if none
							</li>
						</ul>
					</li>
					<li className="with-check">
						<p className="">
							<Checkbox
								onClick={(e) => handleCheckClick(e)}
								id="213"
								checked={checked[213]}
								size="medium"
							/>
							MIT(videos):
						</p>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="214"
									checked={checked[214]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=oFVYVzlvk9c&amp;t=14s&amp;ab_channel=MITOpenCourseWare">
									Breadth-First Search
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="215"
									checked={checked[215]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=IBfWDYSffUU&amp;t=32s&amp;ab_channel=MITOpenCourseWare">
									Depth-First Search
								</a>
							</li>
						</ul>
					</li>
					<li className="with-check">
						<p className="">
							<Checkbox
								onClick={(e) => handleCheckClick(e)}
								id="216"
								checked={checked[216]}
								size="medium"
							/>
							Skiena Lectures - great intro:
						</p>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="217"
									checked={checked[217]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=Sjk0xqWWPCc&amp;list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&amp;index=10">
									CSE373 2020 - Lecture 10 - Graph Data
									Structures (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="218"
									checked={checked[218]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=ZTwjXj81NVY&amp;list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&amp;index=11">
									CSE373 2020 - Lecture 11 - Graph Traversal
									(video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="219"
									checked={checked[219]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=KyordYB3BOs&amp;list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&amp;index=12">
									CSE373 2020 - Lecture 12 - Depth First
									Search (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="220"
									checked={checked[220]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=oolm2VnJUKw&amp;list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&amp;index=13">
									CSE373 2020 - Lecture 13 - Minimum Spanning
									Trees (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="221"
									checked={checked[221]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=RktgPx0MarY&amp;list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&amp;index=14">
									CSE373 2020 - Lecture 14 - Minimum Spanning
									Trees (con&#39;t) (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="222"
									checked={checked[222]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=MUe5DXRhyAo&amp;list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&amp;index=15">
									CSE373 2020 - Lecture 15 - Graph Algorithms
									(con&#39;t 2) (video)
								</a>
							</li>
						</ul>
					</li>
					<li className="with-check">
						<p className="">
							<Checkbox
								onClick={(e) => handleCheckClick(e)}
								id="223"
								checked={checked[223]}
								size="medium"
							/>
							Graphs (review and more):
						</p>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="224"
									checked={checked[224]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=Aa2sqUhIn-E&amp;index=15&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb">
									6.006 Single-Source Shortest Paths Problem
									(video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="225"
									checked={checked[225]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=NSHizBK9JD8&amp;t=1731s&amp;ab_channel=MITOpenCourseWare">
									6.006 Dijkstra (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="226"
									checked={checked[226]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=f9cVS_URPc0&amp;ab_channel=MITOpenCourseWare">
									6.006 Bellman-Ford (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="227"
									checked={checked[227]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=CHvQ3q_gJ7E&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&amp;index=18">
									6.006 Speeding Up Dijkstra (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="228"
									checked={checked[228]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=i_AQT_XfvD8&amp;index=6&amp;list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm">
									Aduni: Graph Algorithms I - Topological
									Sorting, Minimum Spanning Trees, Prim&#39;s
									Algorithm - Lecture 6 (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="229"
									checked={checked[229]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=ufj5_bppBsA&amp;list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&amp;index=7">
									Aduni: Graph Algorithms II - DFS, BFS,
									Kruskal&#39;s Algorithm, Union Find Data
									Structure - Lecture 7 (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="230"
									checked={checked[230]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=DiedsPsMKXc&amp;list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&amp;index=8">
									Aduni: Graph Algorithms III: Shortest Path -
									Lecture 8 (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="231"
									checked={checked[231]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=XIAQRlNkJAw&amp;list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&amp;index=9">
									Aduni: Graph Alg. IV: Intro to geometric
									algorithms - Lecture 9 (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="232"
									checked={checked[232]}
									size="medium"
								/>{" "}
								<a href="https://archive.org/details/ucberkeley_webcast_zFbq8vOZ_0k">
									CS 61B 2014: Weighted graphs (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="233"
									checked={checked[233]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=tKwnms5iRBU&amp;index=16&amp;list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp">
									Greedy Algorithms: Minimum Spanning Tree
									(video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="234"
									checked={checked[234]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=RpgcYiky7uw">
									Strongly Connected Components Kosaraju&#39;s
									Algorithm Graph Algorithm (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="235"
									checked={checked[235]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/playlist?list=PL9xmBV_5YoZO-Y-H3xIC9DGSfVYJng9Yw">
									[Review] Shortest Path Algorithms (playlist)
									in 16 minutes (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="236"
									checked={checked[236]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/playlist?list=PL9xmBV_5YoZObEi3Hf6lmyW-CBfs7nkOV">
									[Review] Minimum Spanning Trees (playlist)
									in 4 minutes (video)
								</a>
							</li>
						</ul>
					</li>
					<li>
						<p>Full Coursera Course:</p>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="237"
									checked={checked[237]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/learn/algorithms-on-graphs/home/welcome">
									Algorithms on Graphs (video)
								</a>
							</li>
						</ul>
					</li>
					<li>
						<p>I&#39;ll implement:</p>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="238"
									checked={checked[238]}
									size="medium"
								/>{" "}
								DFS with adjacency list (recursive)
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="239"
									checked={checked[239]}
									size="medium"
								/>{" "}
								DFS with adjacency list (iterative with stack)
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="240"
									checked={checked[240]}
									size="medium"
								/>{" "}
								DFS with adjacency matrix (recursive)
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="241"
									checked={checked[241]}
									size="medium"
								/>{" "}
								DFS with adjacency matrix (iterative with stack)
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="242"
									checked={checked[242]}
									size="medium"
								/>{" "}
								BFS with adjacency list
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="243"
									checked={checked[243]}
									size="medium"
								/>{" "}
								BFS with adjacency matrix
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="244"
									checked={checked[244]}
									size="medium"
								/>{" "}
								single-source shortest path (Dijkstra)
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="245"
									checked={checked[245]}
									size="medium"
								/>{" "}
								minimum spanning tree
							</li>
							<li>
								DFS-based algorithms (see Aduni videos above):
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="246"
											checked={checked[246]}
											size="medium"
										/>{" "}
										check for cycle (needed for topological
										sort, since we&#39;ll check for cycle
										before starting)
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="247"
											checked={checked[247]}
											size="medium"
										/>{" "}
										topological sort
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="248"
											checked={checked[248]}
											size="medium"
										/>{" "}
										count connected components in a graph
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="249"
											checked={checked[249]}
											size="medium"
										/>{" "}
										list strongly connected components
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="250"
											checked={checked[250]}
											size="medium"
										/>{" "}
										check for bipartite graph
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
				<h2 id="even-more-knowledge">Even More Knowledge</h2>
				<ul>
					<li>
						<h3 id="recursion">Recursion</h3>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="251"
									checked={checked[251]}
									size="medium"
								/>{" "}
								Stanford lectures on recursion &amp;
								backtracking:
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="252"
											checked={checked[252]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=gl3emqCuueQ&amp;list=PLFE6E58F856038C69&amp;index=8">
											Lecture 8 | Programming Abstractions
											(video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="253"
											checked={checked[253]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=uFJhEPrbycQ&amp;list=PLFE6E58F856038C69&amp;index=9">
											Lecture 9 | Programming Abstractions
											(video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="254"
											checked={checked[254]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=NdF1QDTRkck&amp;index=10&amp;list=PLFE6E58F856038C69">
											Lecture 10 | Programming
											Abstractions (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="255"
											checked={checked[255]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=p-gpaIGRCQI&amp;list=PLFE6E58F856038C69&amp;index=11">
											Lecture 11 | Programming
											Abstractions (video)
										</a>
									</li>
								</ul>
							</li>
							<li>When it is appropriate to use it?</li>
							<li>
								How is tail recursion better than not?
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="256"
											checked={checked[256]}
											size="medium"
										/>{" "}
										<a href="https://www.quora.com/What-is-tail-recursion-Why-is-it-so-bad">
											What Is Tail Recursion Why Is It So
											Bad?
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="257"
											checked={checked[257]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/lecture/programming-languages/tail-recursion-YZic1">
											Tail Recursion (video)
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="258"
									checked={checked[258]}
									size="medium"
								/>{" "}
								<a href="https://youtu.be/ngCos392W4w">
									5 Simple Steps for Solving Any Recursive
									Problem(video)
								</a>
							</li>
						</ul>
						<p>
							{" "}
							Backtracking Blueprint:{" "}
							<a href="https://leetcode.com/problems/combination-sum/discuss/16502/A-general-approach-to-backtracking-questions-in-Java-(Subsets-Permutations-Combination-Sum-Palindrome-Partitioning)">
								Java
							</a>
							<a href="https://leetcode.com/problems/combination-sum/discuss/429538/General-Backtracking-questions-solutions-in-Python-for-reference-%3A">
								Python
							</a>
						</p>
					</li>
					<li>
						<h3 id="dynamic-programming">Dynamic Programming</h3>
						<ul>
							<li>
								You probably won&#39;t see any dynamic
								programming problems in your interview, but
								it&#39;s worth being able to recognize a problem
								as being a candidate for dynamic programming.
							</li>
							<li>
								This subject can be pretty difficult, as each DP
								soluble problem must be defined as a recursion
								relation, and coming up with it can be tricky.
							</li>
							<li>
								I suggest looking at many examples of DP
								problems until you have a solid understanding of
								the pattern involved.
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="259"
									checked={checked[259]}
									size="medium"
								/>{" "}
								Videos:
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="260"
											checked={checked[260]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=wAA0AMfcJHQ&amp;list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&amp;index=18">
											Skiena: CSE373 2020 - Lecture 19 -
											Introduction to Dynamic Programming
											(video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="261"
											checked={checked[261]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=T3A4jlHlhtA&amp;list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&amp;index=19">
											Skiena: CSE373 2020 - Lecture 20 -
											Edit Distance (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="262"
											checked={checked[262]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=iPnPVcZmRbE&amp;list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&amp;index=20">
											Skiena: CSE373 2020 - Lecture 20 -
											Edit Distance (continued) (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="263"
											checked={checked[263]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=2xPE4Wq8coQ&amp;list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&amp;index=21">
											Skiena: CSE373 2020 - Lecture 21 -
											Dynamic Programming (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="264"
											checked={checked[264]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=Yh3RzqQGsyI&amp;list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&amp;index=22">
											Skiena: CSE373 2020 - Lecture 22 -
											Dynamic Programming and Review
											(video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="265"
											checked={checked[265]}
											size="medium"
										/>{" "}
										<a href="https://youtu.be/J5aJEcOr6Eo?list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&amp;t=3558">
											Simonson: Dynamic Programming 0
											(starts at 59:18) (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="266"
											checked={checked[266]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=0EzHjQ_SOeU&amp;index=11&amp;list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm">
											Simonson: Dynamic Programming I -
											Lecture 11 (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="267"
											checked={checked[267]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=v1qiRwuJU7g&amp;list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&amp;index=12">
											Simonson: Dynamic programming II -
											Lecture 12 (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="268"
											checked={checked[268]}
											size="medium"
										/>{" "}
										List of individual DP problems (each is
										short):
										<a href="https://www.youtube.com/playlist?list=PLrmLmBdmIlpsHaNTPP_jHHDx_os9ItYXr">
											Dynamic Programming (video)
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="269"
									checked={checked[269]}
									size="medium"
								/>{" "}
								Yale Lecture notes:
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="270"
											checked={checked[270]}
											size="medium"
										/>{" "}
										<a href="http://www.cs.yale.edu/homes/aspnes/classes/223/notes.html#dynamicProgramming">
											Dynamic Programming
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="271"
									checked={checked[271]}
									size="medium"
								/>{" "}
								Coursera:
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="272"
											checked={checked[272]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/learn/algorithmic-thinking-2/lecture/80RrW/the-rna-secondary-structure-problem">
											The RNA secondary structure problem
											(video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="273"
											checked={checked[273]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/lecture/algorithmic-thinking-2/a-dynamic-programming-algorithm-PSonq">
											A dynamic programming algorithm
											(video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="274"
											checked={checked[274]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/lecture/algorithmic-thinking-2/illustrating-the-dp-algorithm-oUEK2">
											Illustrating the DP algorithm
											(video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="275"
											checked={checked[275]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/learn/algorithmic-thinking-2/lecture/nfK2r/running-time-of-the-dp-algorithm">
											Running time of the DP algorithm
											(video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="276"
											checked={checked[276]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/learn/algorithmic-thinking-2/lecture/M999a/dp-vs-recursive-implementation">
											DP vs. recursive implementation
											(video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="277"
											checked={checked[277]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/lecture/algorithmic-thinking-2/global-pairwise-sequence-alignment-UZ7o6">
											Global pairwise sequence alignment
											(video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="278"
											checked={checked[278]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/learn/algorithmic-thinking-2/lecture/WnNau/local-pairwise-sequence-alignment">
											Local pairwise sequence alignment
											(video)
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="design-patterns">Design patterns</h3>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="279"
									checked={checked[279]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=3cmzqZzwNDM&amp;list=PLGLfVvz_LVvQ5G-LdJ8RLqe-ndo7QITYc&amp;index=3">
									Quick UML review (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="280"
									checked={checked[280]}
									size="medium"
								/>{" "}
								Learn these patterns:
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="281"
											checked={checked[281]}
											size="medium"
										/>{" "}
										strategy
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="282"
											checked={checked[282]}
											size="medium"
										/>{" "}
										singleton
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="283"
											checked={checked[283]}
											size="medium"
										/>{" "}
										adapter
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="284"
											checked={checked[284]}
											size="medium"
										/>{" "}
										prototype
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="285"
											checked={checked[285]}
											size="medium"
										/>{" "}
										decorator
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="286"
											checked={checked[286]}
											size="medium"
										/>{" "}
										visitor
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="287"
											checked={checked[287]}
											size="medium"
										/>{" "}
										factory, abstract factory
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="288"
											checked={checked[288]}
											size="medium"
										/>{" "}
										facade
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="289"
											checked={checked[289]}
											size="medium"
										/>{" "}
										observer
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="290"
											checked={checked[290]}
											size="medium"
										/>{" "}
										proxy
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="291"
											checked={checked[291]}
											size="medium"
										/>{" "}
										delegate
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="292"
											checked={checked[292]}
											size="medium"
										/>{" "}
										command
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="293"
											checked={checked[293]}
											size="medium"
										/>{" "}
										state
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="294"
											checked={checked[294]}
											size="medium"
										/>{" "}
										memento
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="295"
											checked={checked[295]}
											size="medium"
										/>{" "}
										iterator
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="296"
											checked={checked[296]}
											size="medium"
										/>{" "}
										composite
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="297"
											checked={checked[297]}
											size="medium"
										/>{" "}
										flyweight
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="298"
									checked={checked[298]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/playlist?list=PLF206E906175C7E07">
									Series of videos (27 videos)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="299"
									checked={checked[299]}
									size="medium"
								/>{" "}
								<a href="https://www.amazon.com/Head-First-Design-Patterns-Freeman/dp/0596007124">
									Book: Head First Design Patterns
								</a>
								<ul>
									<li>
										I know the canonical book is
										&quot;Design Patterns: Elements of
										Reusable Object-Oriented Software&quot;,
										but Head First is great for beginners to
										OO.
									</li>
								</ul>
							</li>
							<li>
								<a href="https://sourcemaking.com/design-patterns-and-tips">
									Handy reference: 101 Design Patterns &amp;
									Tips for Developers
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="combinatorics-n-choose-k--probability">
							Combinatorics (n choose k) &amp; Probability
						</h3>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="300"
									checked={checked[300]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=8RRo6Ti9d0U">
									Math Skills: How to find Factorial,
									Permutation and Combination (Choose) (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="301"
									checked={checked[301]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=sZkAAk9Wwa4">
									Make School: Probability (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="302"
									checked={checked[302]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=dNaJg-mLobQ">
									Make School: More Probability and Markov
									Chains (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="303"
									checked={checked[303]}
									size="medium"
								/>{" "}
								Khan Academy:
								<ul>
									<li>
										Course layout:
										<ul>
											<li className="with-check">
												<Checkbox
													onClick={(e) =>
														handleCheckClick(e)
													}
													id="304"
													checked={checked[304]}
													size="medium"
												/>{" "}
												<a href="https://www.khanacademy.org/math/probability/probability-and-combinatorics-topic">
													Basic Theoretical
													Probability
												</a>
											</li>
										</ul>
									</li>
									<li>
										Just the videos - 41 (each are simple
										and each are short):
										<ul>
											<li className="with-check">
												<Checkbox
													onClick={(e) =>
														handleCheckClick(e)
													}
													id="305"
													checked={checked[305]}
													size="medium"
												/>{" "}
												<a href="https://www.youtube.com/watch?v=uzkc-qNVoOk&amp;list=PLC58778F28211FA19">
													Probability Explained
													(video)
												</a>
											</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="np-np-complete-and-approximation-algorithms">
							NP, NP-Complete and Approximation Algorithms
						</h3>
						<ul>
							<li>
								Know about the most famous classes of
								NP-complete problems, such as traveling salesman
								and the knapsack problem, and be able to
								recognize them when an interviewer asks you them
								in disguise.
							</li>
							<li>Know what NP-complete means.</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="306"
									checked={checked[306]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=moPtwq_cVH8&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&amp;index=23">
									Computational Complexity (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="307"
									checked={checked[307]}
									size="medium"
								/>{" "}
								Simonson:
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="308"
											checked={checked[308]}
											size="medium"
										/>{" "}
										<a href="https://youtu.be/qcGnJ47Smlo?list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&amp;t=2939">
											Greedy Algs. II &amp; Intro to NP
											Completeness (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="309"
											checked={checked[309]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=e0tGC6ZQdQE&amp;index=16&amp;list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm">
											NP Completeness II &amp; Reductions
											(video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="310"
											checked={checked[310]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=fCX1BGT3wjE&amp;index=17&amp;list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm">
											NP Completeness III (Video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="311"
											checked={checked[311]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=NKLDp3Rch3M&amp;list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&amp;index=18">
											NP Completeness IV (video)
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="312"
									checked={checked[312]}
									size="medium"
								/>{" "}
								Skiena:
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="313"
											checked={checked[313]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=ItHp5laE1VE&amp;list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&amp;index=23">
											CSE373 2020 - Lecture 23 -
											NP-Completeness (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="314"
											checked={checked[314]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=inaFJeCzGxU&amp;list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&amp;index=24">
											CSE373 2020 - Lecture 24 -
											Satisfiability (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="315"
											checked={checked[315]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=B-bhKxjZLlc&amp;list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&amp;index=25">
											CSE373 2020 - Lecture 25 - More
											NP-Completeness (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="316"
											checked={checked[316]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=_EzetTkG_Cc&amp;list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&amp;index=26">
											CSE373 2020 - Lecture 26 -
											NP-Completeness Challenge (video)
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="317"
									checked={checked[317]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=eHZifpgyH_4&amp;list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&amp;index=22">
									Complexity: P, NP, NP-completeness,
									Reductions (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="318"
									checked={checked[318]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=MEz1J9wY2iM&amp;list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&amp;index=24">
									Complexity: Approximation Algorithms (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="319"
									checked={checked[319]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=4q-jmGrmxKs&amp;index=25&amp;list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp">
									Complexity: Fixed-Parameter Algorithms
									(video)
								</a>
							</li>
							<li>
								Peter Norvig discusses near-optimal solutions to
								traveling salesman problem:
								<ul>
									<li>
										<a href="http://nbviewer.jupyter.org/url/norvig.com/ipython/TSP.ipynb">
											Jupyter Notebook
										</a>
									</li>
								</ul>
							</li>
							<li>Pages 1048 - 1140 in CLRS if you have it.</li>
						</ul>
					</li>
					<li>
						<h3 id="how-computers-process-a-program">
							How computers process a program
						</h3>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="320"
									checked={checked[320]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=XM4lGflQFvA">
									How CPU executes a program (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="321"
									checked={checked[321]}
									size="medium"
								/>{" "}
								<a href="https://youtu.be/1I5ZMmrOfnA">
									How computers calculate - ALU (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="322"
									checked={checked[322]}
									size="medium"
								/>{" "}
								<a href="https://youtu.be/fpnE6UAfbtU">
									Registers and RAM (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="323"
									checked={checked[323]}
									size="medium"
								/>{" "}
								<a href="https://youtu.be/FZGugFqdr60">
									The Central Processing Unit (CPU) (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="324"
									checked={checked[324]}
									size="medium"
								/>{" "}
								<a href="https://youtu.be/zltgXvg6r3k">
									Instructions and Programs (video)
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="caches">Caches</h3>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="325"
									checked={checked[325]}
									size="medium"
								/>{" "}
								LRU cache:
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="326"
											checked={checked[326]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=R5ON3iwx78M">
											The Magic of LRU Cache (100 Days of
											Google Dev) (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="327"
											checked={checked[327]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=bq6N7Ym81iI">
											Implementing LRU (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="328"
											checked={checked[328]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=8-FZRAjR7qU">
											LeetCode - 146 LRU Cache (C++)
											(video)
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="329"
									checked={checked[329]}
									size="medium"
								/>{" "}
								CPU cache:
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="330"
											checked={checked[330]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=vjYF_fAZI5E&amp;list=PLrRW1w6CGAcXbMtDFj205vALOGmiRc82-&amp;index=24">
											MIT 6.004 L15: The Memory Hierarchy
											(video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="331"
											checked={checked[331]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=ajgC3-pyGlk&amp;index=25&amp;list=PLrRW1w6CGAcXbMtDFj205vALOGmiRc82-">
											MIT 6.004 L16: Cache Issues (video)
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="processes-and-threads">
							Processes and Threads
						</h3>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="332"
									checked={checked[332]}
									size="medium"
								/>{" "}
								Computer Science 162 - Operating Systems (25
								videos):
								<ul>
									<li>
										for processes and threads see videos
										1-11
									</li>
									<li>
										<a href="https://archive.org/details/ucberkeley-webcast-PL-XXv-cvA_iBDyz-ba4yDskqMDY6A1w_c">
											Operating Systems and System
											Programming (video)
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="https://www.quora.com/What-is-the-difference-between-a-process-and-a-thread">
									What Is The Difference Between A Process And
									A Thread?
								</a>
							</li>
							<li>
								Covers:
								<ul>
									<li>
										Processes, Threads, Concurrency issues
										<ul>
											<li>
												Difference between processes and
												threads
											</li>
											<li>Processes</li>
											<li>Threads</li>
											<li>Locks</li>
											<li>Mutexes</li>
											<li>Semaphores</li>
											<li>Monitors</li>
											<li>How they work?</li>
											<li>Deadlock</li>
											<li>Livelock</li>
										</ul>
									</li>
									<li>
										CPU activity, interrupts, context
										switching
									</li>
									<li>
										Modern concurrency constructs with
										multicore processors
									</li>
									<li>
										<a href="https://youtu.be/O4nwUqQodAg">
											Paging, segmentation and virtual
											memory (video)
										</a>
									</li>
									<li>
										<a href="https://youtu.be/iKlAWIKEyuw">
											Interrupts (video)
										</a>
									</li>
									<li>
										Process resource needs (memory: code,
										static storage, stack, heap, and also
										file descriptors, i/o)
									</li>
									<li>
										Thread resource needs (shares above
										(minus stack) with other threads in the
										same process but each has its own pc,
										stack counter, registers, and stack)
									</li>
									<li>
										Forking is really copy on write
										(read-only) until the new process writes
										to memory, then it does a full copy.
									</li>
									<li>
										Context switching
										<ul>
											<li>
												How context switching is
												initiated by the operating
												system and underlying hardware?
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="333"
									checked={checked[333]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/playlist?list=PL5jc9xFGsL8E12so1wlMS0r0hTQoJL74M">
									threads in C++ (series - 10 videos)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="334"
									checked={checked[334]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/playlist?list=PLacuG5pysFbDQU8kKxbUh4K5c1iL5_k7k">
									CS 377 Spring &#39;14: Operating Systems
									from University of Massachusetts
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="335"
									checked={checked[335]}
									size="medium"
								/>{" "}
								concurrency in Python (videos):
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="336"
											checked={checked[336]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/playlist?list=PL1H1sBF1VAKVMONJWJkmUh6_p8g4F2oy1">
											Short series on threads
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="337"
											checked={checked[337]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=Bs7vPNbB9JM">
											Python Threads
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="338"
											checked={checked[338]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=Obt-vMVdM8s">
											Understanding the Python GIL (2010)
										</a>
										<ul>
											<li>
												<a href="http://www.dabeaz.com/GIL">
													reference
												</a>
											</li>
										</ul>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="339"
											checked={checked[339]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=MCs5OvhV9S4">
											David Beazley - Python Concurrency
											From the Ground Up: LIVE! - PyCon
											2015
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="340"
											checked={checked[340]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=ZzfHjytDceU">
											Keynote David Beazley - Topics of
											Interest (Python Asyncio)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="341"
											checked={checked[341]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=0zaPs8OtyKY">
											Mutex in Python
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="testing">Testing</h3>
						<ul>
							<li>
								To cover:
								<ul>
									<li>how unit testing works</li>
									<li>what are mock objects</li>
									<li>what is integration testing</li>
									<li>what is dependency injection</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="342"
									checked={checked[342]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=SAhJf36_u5U">
									Agile Software Testing with James Bach
									(video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="343"
									checked={checked[343]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=ILkT_HV9DVU">
									Open Lecture by James Bach on Software
									Testing (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="344"
									checked={checked[344]}
									size="medium"
								/>{" "}
								<a href="https://vimeo.com/83960706">
									Steve Freeman - Test-Driven Development
									(that’s not what we meant) (video)
								</a>
								<ul>
									<li>
										<a href="http://gotocon.com/dl/goto-berlin-2013/slides/SteveFreeman_TestDrivenDevelopmentThatsNotWhatWeMeant.pdf">
											slides
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="345"
									checked={checked[345]}
									size="medium"
								/>{" "}
								Dependency injection:
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="346"
											checked={checked[346]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=IKD2-MAkXyQ">
											video
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="347"
											checked={checked[347]}
											size="medium"
										/>{" "}
										<a href="http://jasonpolites.github.io/tao-of-testing/ch3-1.1.html">
											Tao Of Testing
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="348"
									checked={checked[348]}
									size="medium"
								/>{" "}
								<a href="http://jasonpolites.github.io/tao-of-testing/ch4-1.1.html">
									How to write tests
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="string-searching--manipulations">
							String searching &amp; manipulations
						</h3>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="349"
									checked={checked[349]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/learn/algorithms-part2/lecture/TH18W/suffix-arrays">
									Sedgewick - Suffix Arrays (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="350"
									checked={checked[350]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/learn/algorithms-part2/home/week/4">
									Sedgewick - Substring Search (videos)
								</a>
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="351"
											checked={checked[351]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/lecture/algorithms-part2/introduction-to-substring-search-n3ZpG">
											1. Introduction to Substring Search
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="352"
											checked={checked[352]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/learn/algorithms-part2/lecture/2Kn5i/brute-force-substring-search">
											2. Brute-Force Substring Search
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="353"
											checked={checked[353]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/learn/algorithms-part2/lecture/TAtDr/knuth-morris-pratt">
											3. Knuth-Morris Pratt
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="354"
											checked={checked[354]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/learn/algorithms-part2/lecture/CYxOT/boyer-moore">
											4. Boyer-Moore
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="355"
											checked={checked[355]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/lecture/algorithms-part2/rabin-karp-3KiqT">
											5. Rabin-Karp
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="356"
									checked={checked[356]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/learn/data-structures/lecture/tAfHI/search-pattern-in-text">
									Search pattern in text (video)
								</a>
							</li>
						</ul>
						<p>
							{" "}
							If you need more detail on this subject, see
							&quot;String Matching&quot; section in{" "}
							<a href="#additional-detail-on-some-subjects">
								Additional Detail on Some Subjects
							</a>
							.
						</p>
					</li>
					<li>
						<h3 id="tries">Tries</h3>
						<ul>
							<li>
								Note there are different kinds of tries. Some
								have prefixes, some don&#39;t, and some use
								string instead of bits to track the path
							</li>
							<li>I read through code, but will not implement</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="357"
									checked={checked[357]}
									size="medium"
								/>{" "}
								<a href="https://www.coursera.org/learn/algorithms-part2/home/week/4">
									Sedgewick - Tries (3 videos)
								</a>
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="358"
											checked={checked[358]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/learn/algorithms-part2/lecture/CPVdr/r-way-tries">
											1. R Way Tries
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="359"
											checked={checked[359]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/learn/algorithms-part2/lecture/yQM8K/ternary-search-tries">
											2. Ternary Search Tries
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="360"
											checked={checked[360]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/learn/algorithms-part2/lecture/jwNmV/character-based-operations">
											3. Character Based Operations
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="361"
									checked={checked[361]}
									size="medium"
								/>{" "}
								<a href="http://www.cs.yale.edu/homes/aspnes/classes/223/notes.html#Tries">
									Notes on Data Structures and Programming
									Techniques
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="362"
									checked={checked[362]}
									size="medium"
								/>{" "}
								Short course videos:
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="363"
											checked={checked[363]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/learn/data-structures-optimizing-performance/lecture/08Xyf/core-introduction-to-tries">
											Introduction To Tries (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="364"
											checked={checked[364]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/learn/data-structures-optimizing-performance/lecture/PvlZW/core-performance-of-tries">
											Performance Of Tries (video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="365"
											checked={checked[365]}
											size="medium"
										/>{" "}
										<a href="https://www.coursera.org/learn/data-structures-optimizing-performance/lecture/DFvd3/core-implementing-a-trie">
											Implementing A Trie (video)
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="366"
									checked={checked[366]}
									size="medium"
								/>{" "}
								<a href="https://www.toptal.com/java/the-trie-a-neglected-data-structure">
									The Trie: A Neglected Data Structure
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="367"
									checked={checked[367]}
									size="medium"
								/>{" "}
								<a href="https://www.topcoder.com/thrive/articles/Using%20Tries">
									TopCoder - Using Tries
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="368"
									checked={checked[368]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=TJ8SkcUSdbU">
									Stanford Lecture (real world use case)
									(video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="369"
									checked={checked[369]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=NinWEPPrkDQ&amp;index=16&amp;list=PLUl4u3cNGP61hsJNdULdudlRL493b-XZf">
									MIT, Advanced Data Structures, Strings (can
									get pretty obscure about halfway through)
									(video)
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="floating-point-numbers">
							Floating Point Numbers
						</h3>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="370"
									checked={checked[370]}
									size="medium"
								/>{" "}
								simple 8-bit:{" "}
								<a href="https://www.youtube.com/watch?v=ji3SfClm8TU">
									Representation of Floating Point Numbers - 1
									(video - there is an error in calculations -
									see video description)
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="unicode">Unicode</h3>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="371"
									checked={checked[371]}
									size="medium"
								/>{" "}
								<a href="http://www.joelonsoftware.com/articles/Unicode.html">
									The Absolute Minimum Every Software
									Developer Absolutely, Positively Must Know
									About Unicode and Character Sets
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="372"
									checked={checked[372]}
									size="medium"
								/>{" "}
								<a href="http://kunststube.net/encoding/">
									What Every Programmer Absolutely, Positively
									Needs To Know About Encodings And Character
									Sets To Work With Text
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="endianness">Endianness</h3>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="373"
									checked={checked[373]}
									size="medium"
								/>{" "}
								<a href="https://web.archive.org/web/20180107141940/http://www.cs.umd.edu:80/class/sum2003/cmsc311/Notes/Data/endian.html">
									Big And Little Endian
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="374"
									checked={checked[374]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=JrNF0KRAlyo">
									Big Endian Vs Little Endian (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="375"
									checked={checked[375]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=oBSuXP-1Tc0">
									Big And Little Endian Inside/Out (video)
								</a>
								<ul>
									<li>
										Very technical talk for kernel devs.
										Don&#39;t worry if most is over your
										head.
									</li>
									<li>The first half is enough.</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="networking">Networking</h3>
						<ul>
							<li>
								<strong>
									If you have networking experience or want to
									be a reliability engineer or operations
									engineer, expect questions
								</strong>
							</li>
							<li>Otherwise, this is just good to know</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="376"
									checked={checked[376]}
									size="medium"
								/>{" "}
								<a href="https://www.khanacademy.org/computing/code-org/computers-and-the-internet">
									Khan Academy
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="377"
									checked={checked[377]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=Vdc8TCESIg8">
									UDP and TCP: Comparison of Transport
									Protocols (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="378"
									checked={checked[378]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=e5DEVa9eSN0">
									TCP/IP and the OSI Model Explained! (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="379"
									checked={checked[379]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=nomyRJehhnM">
									Packet Transmission across the Internet.
									Networking &amp; TCP/IP tutorial. (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="380"
									checked={checked[380]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=WGJrLqtX7As">
									HTTP (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="381"
									checked={checked[381]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=S2iBR2ZlZf0">
									SSL and HTTPS (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="382"
									checked={checked[382]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=Rp3iZUvXWlM">
									SSL/TLS (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="383"
									checked={checked[383]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=E9FxNzv1Tr8">
									HTTP 2.0 (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="384"
									checked={checked[384]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/playlist?list=PLEbnTDJUr_IegfoqO4iPnPYQui46QqT0j">
									Video Series (21 videos) (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="385"
									checked={checked[385]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=t5xYI0jzOf4">
									Subnetting Demystified - Part 5 CIDR
									Notation (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="386"
									checked={checked[386]}
									size="medium"
								/>{" "}
								Sockets:
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="387"
											checked={checked[387]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=6G_W54zuadg&amp;t=6s">
											Java - Sockets - Introduction
											(video)
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="388"
											checked={checked[388]}
											size="medium"
										/>{" "}
										<a href="https://www.youtube.com/watch?v=G75vN2mnJeQ">
											Socket Programming (video)
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
				<hr />
				<h2 id="final-review">Final Review</h2>
				<pre>
					<code>
						This section will have shorter videos that you can watch
						pretty quickly to review most of the important concepts.
						It&#39;s nice if you want a refresher often.
					</code>
				</pre>
				<ul>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="389"
							checked={checked[389]}
							size="medium"
						/>{" "}
						Series of 2-3 minutes short subject videos (23 videos)
						<ul>
							<li>
								<a href="https://www.youtube.com/watch?v=r4r1DZcx1cM&amp;list=PLmVb1OknmNJuC5POdcDv5oCS7_OUkDgpj&amp;index=22">
									Videos
								</a>
							</li>
						</ul>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="390"
							checked={checked[390]}
							size="medium"
						/>{" "}
						Series of 2-5 minutes short subject videos - Michael
						Sambol (38 videos):
						<ul>
							<li>
								<a href="https://www.youtube.com/channel/UCzDJwLWoYCUQowF_nG3m5OQ">
									Videos
								</a>
							</li>
						</ul>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="391"
							checked={checked[391]}
							size="medium"
						/>{" "}
						<a href="https://www.coursera.org/learn/algorithms-part1">
							Sedgewick Videos - Algorithms I
						</a>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="392"
							checked={checked[392]}
							size="medium"
						/>{" "}
						<a href="https://www.coursera.org/learn/algorithms-part2">
							Sedgewick Videos - Algorithms II
						</a>
					</li>
				</ul>
				<hr />
				<h2 id="update-your-resume">Update Your Resume</h2>
				<ul>
					<li>
						See Resume prep information in the books: &quot;Cracking
						The Coding Interview&quot; and &quot;Programming
						Interviews Exposed&quot;
					</li>
					<li>
						I don&#39;t know how important this is (you can do your
						own research) but here is an article on making your
						resume ATS Compliant:
						<ul>
							<li>
								<a href="https://ayedot.com/97/MiniBlog/Meaning-of-ATS-compliant-resume-and-How-to-create-ATS-Resume-for-Free">
									How to Create or Check if your Resume is ATS
									Compliant
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="https://www.careercup.com/resume">
							&quot;This Is What A GOOD Resume Should Look
							Like&quot; by Gayle McDowell (author of Cracking the
							Coding Interview)
						</a>
						,{" "}
						<ul>
							<li>
								Note by the author: &quot;This is for a
								US-focused resume. CVs for India and other
								countries have different expectations, although
								many of the points will be the same.&quot;
							</li>
						</ul>
					</li>
					<li>
						<a href="https://www.techinterviewhandbook.org/resume/guide">
							&quot;Step-by-step resume guide&quot; by Tech
							Interview Handbook
						</a>
						<ul>
							<li>
								Detailed guide on how to set up your resume from
								scratch, write effective resume content,
								optimize it, and test your resume
							</li>
						</ul>
					</li>
				</ul>
				<h2 id="find-a-job">Find a Job</h2>
				<ul>
					<li>
						<a href="https://ayedot.com/151/MiniBlog/Top-10-Best-Websites-for-Careers--Jobs">
							Sites for Finding Jobs
						</a>
					</li>
				</ul>
				<h2 id="interview-process--general-interview-prep">
					Interview Process &amp; General Interview Prep
				</h2>
				<ul>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="393"
							checked={checked[393]}
							size="medium"
						/>{" "}
						<a href="https://davidbyttow.medium.com/how-to-pass-the-engineering-interview-in-2021-45f1b389a1">
							How to Pass the Engineering Interview in 2021
						</a>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="394"
							checked={checked[394]}
							size="medium"
						/>{" "}
						<a href="https://www.youtube.com/watch?v=N233T0epWTs">
							Demystifying Tech Recruiting
						</a>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="395"
							checked={checked[395]}
							size="medium"
						/>{" "}
						How to Get a Job at the Big 4:
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="396"
									checked={checked[396]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=YJZCUhxNCv8">
									How to Get a Job at the Big 4 - Amazon,
									Facebook, Google &amp; Microsoft (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="397"
									checked={checked[397]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=6790FVXWBw8&amp;feature=youtu.be">
									How to Get a Job at the Big 4.1 (Follow-up
									video)
								</a>
							</li>
						</ul>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="398"
							checked={checked[398]}
							size="medium"
						/>{" "}
						Cracking The Coding Interview Set 1:
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="399"
									checked={checked[399]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=rEJzOhC5ZtQ">
									Gayle L McDowell - Cracking The Coding
									Interview (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="400"
									checked={checked[400]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=aClxtDcdpsQ">
									Cracking the Coding Interview with Author
									Gayle Laakmann McDowell (video)
								</a>
							</li>
						</ul>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="401"
							checked={checked[401]}
							size="medium"
						/>{" "}
						Cracking the Facebook Coding Interview:
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="402"
									checked={checked[402]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=wCl9kvQGHPI">
									The Approach
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="403"
									checked={checked[403]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=4UWDyJq8jZg">
									Problem Walkthrough
								</a>
							</li>
						</ul>
					</li>
					<li>
						Prep Courses:
						<ul>
							<li>
								<a href="https://www.udemy.com/software-engineer-interview-unleashed">
									Software Engineer Interview Unleashed (paid
									course)
								</a>
								:
								<ul>
									<li>
										Learn how to make yourself ready for
										software engineer interviews from a
										former Google interviewer.
									</li>
								</ul>
							</li>
							<li>
								<a href="https://www.udemy.com/python-for-data-structures-algorithms-and-interviews/">
									Python for Data Structures, Algorithms, and
									Interviews (paid course)
								</a>
								:
								<ul>
									<li>
										A Python centric interview prep course
										which covers data structures,
										algorithms, mock interviews and much
										more.
									</li>
								</ul>
							</li>
							<li>
								<a href="https://www.udacity.com/course/data-structures-and-algorithms-in-python--ud513">
									Intro to Data Structures and Algorithms
									using Python (Udacity free course)
								</a>
								:
								<ul>
									<li>
										A free Python centric data structures
										and algorithms course.
									</li>
								</ul>
							</li>
							<li>
								<a href="https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256">
									Data Structures and Algorithms Nanodegree!
									(Udacity paid Nanodegree)
								</a>
								:
								<ul>
									<li>
										Get hands-on practice with over 100 data
										structures and algorithm exercises and
										guidance from a dedicated mentor to help
										prepare you for interviews and
										on-the-job scenarios.
									</li>
								</ul>
							</li>
							<li>
								<a href="https://www.educative.io/courses/grokking-the-behavioral-interview">
									Grokking the Behavioral Interview (Educative
									free course)
								</a>
								:
								<ul>
									<li>
										Many times, it’s not your technical
										competency that holds you back from
										landing your dream job, it’s how you
										perform on the behavioral interview.
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
				<p>Mock Interviews:</p>
				<ul>
					<li>
						<a href="http://www.gainlo.co/#!/">
							Gainlo.co: Mock interviewers from big companies
						</a>{" "}
						- I used this and it helped me relax for the phone
						screen and on-site interview
					</li>
					<li>
						<a href="https://www.pramp.com/">
							Pramp: Mock interviews from/with peers
						</a>{" "}
						- peer-to-peer model of practice interviews
					</li>
					<li>
						<a href="https://interviewing.io">
							interviewing.io: Practice mock interview with senior
							engineers
						</a>{" "}
						- anonymous algorithmic/systems design interviews with
						senior engineers from FAANG anonymously
					</li>
				</ul>
				<h2 id="be-thinking-of-for-when-the-interview-comes">
					Be thinking of for when the interview comes
				</h2>
				<p>
					Think of about 20 interview questions you&#39;ll get, along
					with the lines of the items below. Have at least one answer
					for each. Have a story, not just data, about something you
					accomplished.
				</p>
				<ul>
					<li>
						<p>Why do you want this job?</p>
					</li>
					<li>
						<p>What&#39;s a tough problem you&#39;ve solved?</p>
					</li>
					<li>
						<p>Biggest challenges faced?</p>
					</li>
					<li>
						<p>Best/worst designs seen?</p>
					</li>
					<li>
						<p>Ideas for improving an existing product</p>
					</li>
					<li>
						<p>
							How do you work best, as an individual and as part
							of a team?
						</p>
					</li>
					<li>
						<p>
							Which of your skills or experiences would be assets
							in the role and why?
						</p>
					</li>
					<li>
						<p>What did you most enjoy at [job x / project y]?</p>
					</li>
					<li>
						<p>
							What was the biggest challenge you faced at [job x /
							project y]?
						</p>
					</li>
					<li>
						<p>
							What was the hardest bug you faced at [job x /
							project y]?
						</p>
					</li>
					<li>
						<p>What did you learn at [job x / project y]?</p>
					</li>
					<li>
						<p>
							What would you have done better at [job x / project
							y]?
						</p>
					</li>
					<li>
						<p>
							If you find it hard to come up with good answers of
							these types of interview questions, here are some
							ideas:{" "}
						</p>
						<ul>
							<li>
								<a href="https://ayedot.com/119/MiniBlog/General-Interview-Questions-and-their-Answers-for-Tech-Jobs">
									General Interview Questions and their
									Answers
								</a>
							</li>
						</ul>
					</li>
				</ul>
				<h2 id="have-questions-for-the-interviewer">
					Have questions for the interviewer
				</h2>
				<p>
					Some of mine (I already may know the answers, but want their
					opinion or team perspective):
				</p>
				<ul>
					<li>How large is your team?</li>
					<li>
						What does your dev cycle look like? Do you do
						waterfall/sprints/agile?
					</li>
					<li>
						Are rushes to deadlines common? Or is there flexibility?
					</li>
					<li>How are decisions made in your team?</li>
					<li>How many meetings do you have per week?</li>
					<li>
						Do you feel your work environment helps you concentrate?
					</li>
					<li>What are you working on?</li>
					<li>What do you like about it?</li>
					<li>What is the work life like?</li>
					<li>How is the work/life balance?</li>
				</ul>
				<h2 id="once-youve-got-the-job">Once You&#39;ve Got The Job</h2>
				<p>Congratulations!</p>
				<p>Keep learning.</p>
				<p>You&#39;re never really done.</p>
				<hr />
				<pre>
					<code>
						*****************************************************************************************************
						*****************************************************************************************************
						Everything below this point is optional. It is NOT
						needed for an entry-level interview. However, by
						studying these, you&#39;ll get greater exposure to more
						CS concepts, and will be better prepared for any
						software engineering job. You&#39;ll be a much more
						well-rounded software engineer.
						*****************************************************************************************************
						*****************************************************************************************************
					</code>
				</pre>
				<hr />
				<h2 id="additional-books">Additional Books</h2>
				<pre>
					<code>
						These are here so you can dive into a topic you find
						interesting.
					</code>
				</pre>
				<ul>
					<li>
						<a href="https://www.amazon.com/dp/013937681X">
							The Unix Programming Environment
						</a>
						<ul>
							<li>An oldie but a goodie</li>
						</ul>
					</li>
					<li>
						<a href="https://www.amazon.com/dp/1593273894/">
							The Linux Command Line: A Complete Introduction
						</a>
						<ul>
							<li>A modern option</li>
						</ul>
					</li>
					<li>
						<a href="https://en.wikipedia.org/wiki/TCP/IP_Illustrated">
							TCP/IP Illustrated Series
						</a>
					</li>
					<li>
						<a href="https://www.amazon.com/gp/product/0596007124/">
							Head First Design Patterns
						</a>
						<ul>
							<li>A gentle introduction to design patterns</li>
						</ul>
					</li>
					<li>
						<a href="https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612">
							Design Patterns: Elements of Reusable
							Object-Oriente​d Software
						</a>
						<ul>
							<li>
								AKA the &quot;Gang Of Four&quot; book, or GOF
							</li>
							<li>The canonical design patterns book</li>
						</ul>
					</li>
					<li>
						<a href="http://www.amazon.com/Algorithm-Design-Manual-Steven-Skiena/dp/1849967202">
							Algorithm Design Manual
						</a>{" "}
						(Skiena)
						<ul>
							<li>As a review and problem recognition</li>
							<li>
								The algorithm catalog portion is well beyond the
								scope of difficulty you&#39;ll get in an
								interview
							</li>
							<li>
								This book has 2 parts:
								<ul>
									<li>
										Class textbook on data structures and
										algorithms
										<ul>
											<li>
												Pros:
												<ul>
													<li>
														Is a good review as any
														algorithms textbook
														would be
													</li>
													<li>
														Nice stories from his
														experiences solving
														problems in industry and
														academia
													</li>
													<li>Code examples in C</li>
												</ul>
											</li>
											<li>
												Cons:
												<ul>
													<li>
														Can be as dense or
														impenetrable as CLRS,
														and in some cases, CLRS
														may be a better
														alternative for some
														subjects
													</li>
													<li>
														Chapters 7, 8, 9 can be
														painful to try to
														follow, as some items
														are not explained well
														or require more brain
														than I have
													</li>
													<li>
														Don&#39;t get me wrong:
														I like Skiena, his
														teaching style, and
														mannerisms, but I may
														not be Stony Brook
														material
													</li>
												</ul>
											</li>
										</ul>
									</li>
									<li>
										Algorithm catalog:
										<ul>
											<li>
												This is the real reason you buy
												this book.
											</li>
											<li>
												This book is better as an
												algorithm reference, and not
												something you read cover to
												cover.
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li>Can rent it on Kindle</li>
							<li>
								Answers:
								<ul>
									<li>
										<a href="https://web.archive.org/web/20150404194210/http://www.algorithm.cs.sunysb.edu/algowiki/index.php/The_Algorithms_Design_Manual_(Second_Edition)">
											Solutions
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="http://www3.cs.stonybrook.edu/~skiena/algorist/book/errata">
									Errata
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="http://jeffe.cs.illinois.edu/teaching/algorithms/">
							Algorithm
						</a>{" "}
						(Jeff Erickson)
					</li>
					<li>
						<a href="https://www.amazon.com/Write-Great-Code-Understanding-Machine/dp/1593270038">
							Write Great Code: Volume 1: Understanding the
							Machine
						</a>
						<ul>
							<li>
								The book was published in 2004, and is somewhat
								outdated, but it&#39;s a terrific resource for
								understanding a computer in brief
							</li>
							<li>
								The author invented{" "}
								<a href="https://en.wikipedia.org/wiki/High_Level_Assembly">
									HLA
								</a>
								, so take mentions and examples in HLA with a
								grain of salt. Not widely used, but decent
								examples of what assembly looks like
							</li>
							<li>
								These chapters are worth the read to give you a
								nice foundation:
								<ul>
									<li>Chapter 2 - Numeric Representation</li>
									<li>
										Chapter 3 - Binary Arithmetic and Bit
										Operations
									</li>
									<li>
										Chapter 4 - Floating-Point
										Representation
									</li>
									<li>
										Chapter 5 - Character Representation
									</li>
									<li>
										Chapter 6 - Memory Organization and
										Access
									</li>
									<li>
										Chapter 7 - Composite Data Types and
										Memory Objects
									</li>
									<li>Chapter 9 - CPU Architecture</li>
									<li>
										Chapter 10 - Instruction Set
										Architecture
									</li>
									<li>
										Chapter 11 - Memory Architecture and
										Organization
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<a href="https://www.amazon.com/Introduction-Algorithms-fourth-Thomas-Cormen/dp/026204630X">
							Introduction to Algorithms
						</a>
						<ul>
							<li>
								<strong>Important:</strong> Reading this book
								will only have limited value. This book is a
								great review of algorithms and data structures,
								but won&#39;t teach you how to write good code.
								You have to be able to code a decent solution
								efficiently
							</li>
							<li>
								AKA CLR, sometimes CLRS, because Stein was late
								to the game
							</li>
						</ul>
					</li>
					<li>
						<a href="https://www.amazon.com/dp/0128119055">
							Computer Architecture, Sixth Edition: A Quantitative
							Approach
						</a>
						<ul>
							<li>
								For a richer, more up-to-date (2017), but longer
								treatment
							</li>
						</ul>
					</li>
				</ul>
				<h2 id="system-design-scalability-data-handling">
					System Design, Scalability, Data Handling
				</h2>
				<p>
					<strong>
						You can expect system design questions if you have 4+
						years of experience.
					</strong>
				</p>
				<ul>
					<li>
						Scalability and System Design are very large topics with
						many topics and resources, since there is a lot to
						consider when designing a software/hardware system that
						can scale. Expect to spend quite a bit of time on this
					</li>
					<li>
						Considerations:
						<ul>
							<li>
								Scalability
								<ul>
									<li>
										Distill large data sets to single values
									</li>
									<li>Transform one data set to another</li>
									<li>
										Handling obscenely large amounts of data
									</li>
								</ul>
							</li>
							<li>
								System design
								<ul>
									<li>features sets</li>
									<li>interfaces</li>
									<li>class hierarchies</li>
									<li>
										designing a system under certain
										constraints
									</li>
									<li>simplicity and robustness</li>
									<li>tradeoffs</li>
									<li>
										performance analysis and optimization
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="404"
							checked={checked[404]}
							size="medium"
						/>{" "}
						<strong>START HERE</strong>:{" "}
						<a href="https://github.com/donnemartin/system-design-primer">
							The System Design Primer
						</a>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="405"
							checked={checked[405]}
							size="medium"
						/>{" "}
						<a href="http://www.hiredintech.com/system-design/">
							System Design from HiredInTech
						</a>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="406"
							checked={checked[406]}
							size="medium"
						/>{" "}
						<a href="https://www.quora.com/How-do-I-prepare-to-answer-design-questions-in-a-technical-interview?redirected_qid=1500023">
							How Do I Prepare To Answer Design Questions In A
							Technical Interview?
						</a>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="407"
							checked={checked[407]}
							size="medium"
						/>{" "}
						<a href="http://blog.gainlo.co/index.php/2015/10/22/8-things-you-need-to-know-before-system-design-interviews/">
							8 Things You Need to Know Before a System Design
							Interview
						</a>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="408"
							checked={checked[408]}
							size="medium"
						/>{" "}
						<a href="https://www.youtube.com/watch?v=UrYLYV7WSHM">
							Database Normalization - 1NF, 2NF, 3NF and 4NF
							(video)
						</a>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="409"
							checked={checked[409]}
							size="medium"
						/>{" "}
						<a href="https://github.com/checkcheckzz/system-design-interview">
							System Design Interview
						</a>{" "}
						- There are a lot of resources in this one. Look through
						the articles and examples. I put some of them below
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="410"
							checked={checked[410]}
							size="medium"
						/>{" "}
						<a href="https://web.archive.org/web/20120716060051/http://www.palantir.com/2011/10/how-to-rock-a-systems-design-interview/">
							How to ace a systems design interview
						</a>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="411"
							checked={checked[411]}
							size="medium"
						/>{" "}
						<a href="http://everythingisdata.wordpress.com/2009/10/17/numbers-everyone-should-know/">
							Numbers Everyone Should Know
						</a>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="412"
							checked={checked[412]}
							size="medium"
						/>{" "}
						<a href="http://blog.tsunanet.net/2010/11/how-long-does-it-take-to-make-context.html">
							How long does it take to make a context switch?
						</a>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="413"
							checked={checked[413]}
							size="medium"
						/>{" "}
						<a href="https://www.youtube.com/watch?v=srOgpXECblk">
							Transactions Across Datacenters (video)
						</a>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="414"
							checked={checked[414]}
							size="medium"
						/>{" "}
						<a href="http://ksat.me/a-plain-english-introduction-to-cap-theorem">
							A plain English introduction to CAP Theorem
						</a>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="415"
							checked={checked[415]}
							size="medium"
						/>{" "}
						<a href="https://www.youtube.com/watch?v=cQP8WApzIQQ&amp;list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB">
							MIT 6.824: Distributed Systems, Spring 2020 (20
							videos)
						</a>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="416"
							checked={checked[416]}
							size="medium"
						/>{" "}
						Consensus Algorithms:
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="417"
									checked={checked[417]}
									size="medium"
								/>{" "}
								Paxos -{" "}
								<a href="https://www.youtube.com/watch?v=s8JqcZtvnsM">
									Paxos Agreement - Computerphile (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="418"
									checked={checked[418]}
									size="medium"
								/>{" "}
								Raft -{" "}
								<a href="https://www.youtube.com/watch?v=P9Ydif5_qvE">
									An Introduction to the Raft Distributed
									Consensus Algorithm (video)
								</a>
								<ul>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="419"
											checked={checked[419]}
											size="medium"
										/>{" "}
										<a href="https://raft.github.io/">
											Easy-to-read paper
										</a>
									</li>
									<li className="with-check">
										<Checkbox
											onClick={(e) => handleCheckClick(e)}
											id="420"
											checked={checked[420]}
											size="medium"
										/>{" "}
										<a href="http://thesecretlivesofdata.com/raft/">
											Infographic
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="421"
							checked={checked[421]}
							size="medium"
						/>{" "}
						<a href="http://www.tom-e-white.com/2007/11/consistent-hashing.html">
							Consistent Hashing
						</a>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="422"
							checked={checked[422]}
							size="medium"
						/>{" "}
						<a href="http://horicky.blogspot.com/2009/11/nosql-patterns.html">
							NoSQL Patterns
						</a>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="423"
							checked={checked[423]}
							size="medium"
						/>{" "}
						Scalability:
						<ul>
							<li>
								You don&#39;t need all of these. Just pick a few
								that interest you.
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="424"
									checked={checked[424]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=-W9F__D3oY4">
									Great overview (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="425"
									checked={checked[425]}
									size="medium"
								/>{" "}
								Short series:
								<ul>
									<li>
										<a href="http://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones">
											Clones
										</a>
									</li>
									<li>
										<a href="http://www.lecloud.net/post/7994751381/scalability-for-dummies-part-2-database">
											Database
										</a>
									</li>
									<li>
										<a href="http://www.lecloud.net/post/9246290032/scalability-for-dummies-part-3-cache">
											Cache
										</a>
									</li>
									<li>
										<a href="http://www.lecloud.net/post/9699762917/scalability-for-dummies-part-4-asynchronism">
											Asynchronism
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="426"
									checked={checked[426]}
									size="medium"
								/>{" "}
								<a href="http://www.aosabook.org/en/distsys.html">
									Scalable Web Architecture and Distributed
									Systems
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="427"
									checked={checked[427]}
									size="medium"
								/>{" "}
								<a href="https://pages.cs.wisc.edu/~zuyu/files/fallacies.pdf">
									Fallacies of Distributed Computing Explained
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="428"
									checked={checked[428]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=modXC5IWTJI">
									Jeff Dean - Building Software Systems At
									Google and Lessons Learned (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="429"
									checked={checked[429]}
									size="medium"
								/>{" "}
								<a href="http://lethain.com/introduction-to-architecting-systems-for-scale/">
									Introduction to Architecting Systems for
									Scale
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="430"
									checked={checked[430]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=9nWyWwY2Onc">
									Scaling mobile games to a global audience
									using App Engine and Cloud Datastore (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="431"
									checked={checked[431]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=H4vMcD7zKM0">
									How Google Does Planet-Scale Engineering for
									Planet-Scale Infra (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="432"
									checked={checked[432]}
									size="medium"
								/>{" "}
								<a href="https://www.topcoder.com/thrive/articles/The%20Importance%20of%20Algorithms">
									The Importance of Algorithms
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="433"
									checked={checked[433]}
									size="medium"
								/>{" "}
								<a href="http://highscalability.com/blog/2009/8/6/an-unorthodox-approach-to-database-design-the-coming-of-the.html">
									Sharding
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="434"
									checked={checked[434]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=p0jGmgIrf_M&amp;list=PLRXxvay_m8gqVlExPC5DG3TGWJTaBgqSA&amp;index=4">
									Engineering for the Long Game - Astrid
									Atkinson Keynote(video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="435"
									checked={checked[435]}
									size="medium"
								/>{" "}
								<a href="http://highscalability.com/blog/2012/3/26/7-years-of-youtube-scalability-lessons-in-30-minutes.html">
									7 Years Of YouTube Scalability Lessons In 30
									Minutes
								</a>
								<ul>
									<li>
										<a href="https://www.youtube.com/watch?v=G-lGCC4KKok">
											video
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="436"
									checked={checked[436]}
									size="medium"
								/>{" "}
								<a href="http://highscalability.com/blog/2016/8/15/how-paypal-scaled-to-billions-of-transactions-daily-using-ju.html">
									How PayPal Scaled To Billions Of
									Transactions Daily Using Just 8VMs
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="437"
									checked={checked[437]}
									size="medium"
								/>{" "}
								<a href="https://blog.clevertap.com/how-to-remove-duplicates-in-large-datasets/">
									How to Remove Duplicates in Large Datasets
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="438"
									checked={checked[438]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=3vV4YiqKm1o">
									A look inside Etsy&#39;s scale and
									engineering culture with Jon Cowie (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="439"
									checked={checked[439]}
									size="medium"
								/>{" "}
								<a href="http://thenewstack.io/led-amazon-microservices-architecture/">
									What Led Amazon to its Own Microservices
									Architecture
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="440"
									checked={checked[440]}
									size="medium"
								/>{" "}
								<a href="https://eng.uber.com/trip-data-squeeze/">
									To Compress Or Not To Compress, That Was
									Uber&#39;s Question
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="441"
									checked={checked[441]}
									size="medium"
								/>{" "}
								<a href="http://highscalability.com/blog/2016/2/25/when-should-approximate-query-processing-be-used.html">
									When Should Approximate Query Processing Be
									Used?
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="442"
									checked={checked[442]}
									size="medium"
								/>{" "}
								<a href="http://highscalability.com/blog/2016/2/23/googles-transition-from-single-datacenter-to-failover-to-a-n.html">
									Google&#39;s Transition From Single
									Datacenter, To Failover, To A Native
									Multihomed Architecture
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="443"
									checked={checked[443]}
									size="medium"
								/>{" "}
								<a href="http://highscalability.com/blog/2016/6/15/the-image-optimization-technology-that-serves-millions-of-re.html">
									The Image Optimization Technology That
									Serves Millions Of Requests Per Day
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="444"
									checked={checked[444]}
									size="medium"
								/>{" "}
								<a href="http://highscalability.com/blog/2016/2/1/a-patreon-architecture-short.html">
									A Patreon Architecture Short
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="445"
									checked={checked[445]}
									size="medium"
								/>{" "}
								<a href="http://highscalability.com/blog/2016/1/27/tinder-how-does-one-of-the-largest-recommendation-engines-de.html">
									Tinder: How Does One Of The Largest
									Recommendation Engines Decide Who You&#39;ll
									See Next?
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="446"
									checked={checked[446]}
									size="medium"
								/>{" "}
								<a href="http://highscalability.com/blog/2016/1/25/design-of-a-modern-cache.html">
									Design Of A Modern Cache
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="447"
									checked={checked[447]}
									size="medium"
								/>{" "}
								<a href="http://highscalability.com/blog/2016/1/13/live-video-streaming-at-facebook-scale.html">
									Live Video Streaming At Facebook Scale
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="448"
									checked={checked[448]}
									size="medium"
								/>{" "}
								<a href="http://highscalability.com/blog/2016/1/11/a-beginners-guide-to-scaling-to-11-million-users-on-amazons.html">
									A Beginner&#39;s Guide To Scaling To 11
									Million+ Users On Amazon&#39;s AWS
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="449"
									checked={checked[449]}
									size="medium"
								/>{" "}
								<a href="http://highscalability.com/blog/2015/11/9/a-360-degree-view-of-the-entire-netflix-stack.html">
									A 360 Degree View Of The Entire Netflix
									Stack
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="450"
									checked={checked[450]}
									size="medium"
								/>{" "}
								<a href="http://highscalability.com/latency-everywhere-and-it-costs-you-sales-how-crush-it">
									Latency Is Everywhere And It Costs You Sales
									- How To Crush It
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="451"
									checked={checked[451]}
									size="medium"
								/>{" "}
								<a href="http://instagram-engineering.tumblr.com/post/13649370142/what-powers-instagram-hundreds-of-instances">
									What Powers Instagram: Hundreds of
									Instances, Dozens of Technologies
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="452"
									checked={checked[452]}
									size="medium"
								/>{" "}
								<a href="http://highscalability.com/blog/2013/9/23/salesforce-architecture-how-they-handle-13-billion-transacti.html">
									Salesforce Architecture - How They Handle
									1.3 Billion Transactions A Day
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="453"
									checked={checked[453]}
									size="medium"
								/>{" "}
								<a href="http://highscalability.com/blog/2013/11/4/espns-architecture-at-scale-operating-at-100000-duh-nuh-nuhs.html">
									ESPN&#39;s Architecture At Scale - Operating
									At 100,000 Duh Nuh Nuhs Per Second
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="454"
									checked={checked[454]}
									size="medium"
								/>{" "}
								See &quot;Messaging, Serialization, and Queueing
								Systems&quot; way below for info on some of the
								technologies that can glue services together
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="455"
									checked={checked[455]}
									size="medium"
								/>{" "}
								Twitter:
								<ul>
									<li>
										<a href="https://www.youtube.com/watch?v=5cKTP36HVgI">
											O&#39;Reilly MySQL CE 2011: Jeremy
											Cole, &quot;Big and Small Data at
											@Twitter&quot; (video)
										</a>
									</li>
									<li>
										<a href="https://www.infoq.com/presentations/Twitter-Timeline-Scalability">
											Timelines at Scale
										</a>
									</li>
								</ul>
							</li>
							<li>
								For even more, see &quot;Mining Massive
								Datasets&quot; video series in the{" "}
								<a href="#video-series">Video Series</a> section
							</li>
						</ul>
					</li>
					<li className="with-check">
						<Checkbox
							onClick={(e) => handleCheckClick(e)}
							id="456"
							checked={checked[456]}
							size="medium"
						/>{" "}
						Practicing the system design process: Here are some
						ideas to try working through on paper, each with some
						documentation on how it was handled in the real world:
						<ul>
							<li>
								review:{" "}
								<a href="https://github.com/donnemartin/system-design-primer">
									The System Design Primer
								</a>
							</li>
							<li>
								<a href="http://www.hiredintech.com/system-design/">
									System Design from HiredInTech
								</a>
							</li>
							<li>
								<a href="https://github.com/jwasham/coding-interview-university/blob/main/extras/cheat%20sheets/system-design.pdf">
									cheat sheet
								</a>
							</li>
							<li>
								flow:
								<ol>
									<li>
										Understand the problem and scope:
										<ul>
											<li>
												Define the use cases, with
												interviewer&#39;s help
											</li>
											<li>Suggest additional features</li>
											<li>
												Remove items that interviewer
												deems out of scope
											</li>
											<li>
												Assume high availability is
												required, add as a use case
											</li>
										</ul>
									</li>
									<li>
										Think about constraints:
										<ul>
											<li>
												Ask how many requests per month
											</li>
											<li>
												Ask how many requests per second
												(they may volunteer it or make
												you do the math)
											</li>
											<li>
												Estimate reads vs. writes
												percentage
											</li>
											<li>
												Keep 80/20 rule in mind when
												estimating
											</li>
											<li>
												How much data written per second
											</li>
											<li>
												Total storage required over 5
												years
											</li>
											<li>
												How much data read per second
											</li>
										</ul>
									</li>
									<li>
										Abstract design:
										<ul>
											<li>
												Layers (service, data, caching)
											</li>
											<li>
												Infrastructure: load balancing,
												messaging
											</li>
											<li>
												Rough overview of any key
												algorithm that drives the
												service
											</li>
											<li>
												Consider bottlenecks and
												determine solutions
											</li>
										</ul>
									</li>
								</ol>
							</li>
							<li>
								Exercises:
								<ul>
									<li>
										<a href="https://blog.twitter.com/2010/announcing-snowflake">
											Design a random unique ID generation
											system
										</a>
									</li>
									<li>
										<a href="http://www.slideshare.net/dvirsky/introduction-to-redis">
											Design a key-value database
										</a>
									</li>
									<li>
										<a href="http://highscalability.com/blog/2011/12/6/instagram-architecture-14-million-users-terabytes-of-photos.html">
											Design a picture sharing system
										</a>
									</li>
									<li>
										<a href="http://ijcai13.org/files/tutorial_slides/td3.pdf">
											Design a recommendation system
										</a>
									</li>
									<li>
										<a href="http://www.hiredintech.com/system-design/the-system-design-process/">
											Design a URL-shortener system:
											copied from above
										</a>
									</li>
									<li>
										<a href="https://web.archive.org/web/20220217064329/https://adayinthelifeof.nl/2011/02/06/memcache-internals/">
											Design a cache system
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
				<h2 id="additional-learning">Additional Learning</h2>
				<pre>
					<code>
						I added them to help you become a well-rounded software
						engineer, and to be aware of certain technologies and
						algorithms, so you&#39;ll have a bigger toolbox.
					</code>
				</pre>
				<ul>
					<li>
						<h3 id="compilers">Compilers</h3>
						<ul>
							<li>
								<a href="https://www.youtube.com/watch?v=IhC7sdYe-Jg">
									How a Compiler Works in ~1 minute (video)
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=CSZLNYF4Klo">
									Harvard CS50 - Compilers (video)
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=twodd1KFfGk">
									C++ (video)
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=FnGCDLhaxKU">
									Understanding Compiler Optimization (C++)
									(video)
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="emacs-and-vim">Emacs and vi(m)</h3>
						<ul>
							<li>
								Familiarize yourself with a unix-based code
								editor
							</li>
							<li>
								vi(m):
								<ul>
									<li>
										<a href="https://www.youtube.com/watch?v=5givLEMcINQ&amp;index=1&amp;list=PL13bz4SHGmRxlZVmWQ9DvXo1fEg4UdGkr">
											Editing With vim 01 - Installation,
											Setup, and The Modes (video)
										</a>
									</li>
									<li>
										<a href="http://vim-adventures.com/">
											VIM Adventures
										</a>
									</li>
									<li>
										set of 4 videos:
										<ul>
											<li>
												<a href="https://www.youtube.com/watch?v=SI8TeVMX8pk">
													The vi/vim editor - Lesson 1
												</a>
											</li>
											<li>
												<a href="https://www.youtube.com/watch?v=F3OO7ZIOaJE">
													The vi/vim editor - Lesson 2
												</a>
											</li>
											<li>
												<a href="https://www.youtube.com/watch?v=ZYEccA_nMaI">
													The vi/vim editor - Lesson 3
												</a>
											</li>
											<li>
												<a href="https://www.youtube.com/watch?v=1lYD5gwgZIA">
													The vi/vim editor - Lesson 4
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="http://www.cs.yale.edu/homes/aspnes/classes/223/notes.html#Using_Vi_instead_of_Emacs">
											Using Vi Instead of Emacs
										</a>
									</li>
								</ul>
							</li>
							<li>
								emacs:
								<ul>
									<li>
										<a href="https://www.youtube.com/watch?v=hbmV1bnQ-i0">
											Basics Emacs Tutorial (video)
										</a>
									</li>
									<li>
										set of 3 (videos):
										<ul>
											<li>
												<a href="https://www.youtube.com/watch?v=ujODL7MD04Q">
													Emacs Tutorial (Beginners)
													-Part 1- File commands,
													cut/copy/paste, cursor
													commands
												</a>
											</li>
											<li>
												<a href="https://www.youtube.com/watch?v=XWpsRupJ4II">
													Emacs Tutorial (Beginners)
													-Part 2- Buffer management,
													search, M-x grep and rgrep
													modes
												</a>
											</li>
											<li>
												<a href="https://www.youtube.com/watch?v=paSgzPso-yc">
													Emacs Tutorial (Beginners)
													-Part 3- Expressions,
													Statements, ~/.emacs file
													and packages
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=JWD1Fpdd4Pc">
											Evil Mode: Or, How I Learned to Stop
											Worrying and Love Emacs (video)
										</a>
									</li>
									<li>
										<a href="http://www.cs.yale.edu/homes/aspnes/classes/223/notes.html#Writing_C_programs_with_Emacs">
											Writing C Programs With Emacs
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=48JlgiBpw_I&amp;t=0s">
									The Absolute Beginner&#39;s Guide to Emacs
									(video by David Wilson)
								</a>
							</li>
							<li>
								<a href="https://systemcrafters.net/emacs-essentials/absolute-beginners-guide-to-emacs/">
									The Absolute Beginner&#39;s Guide to Emacs
									(notes by David Wilson)
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="unix-command-line-tools">
							Unix command line tools
						</h3>
						<ul>
							<li>I filled in the list below from good tools.</li>
							<li>bash</li>
							<li>cat</li>
							<li>grep</li>
							<li>sed</li>
							<li>awk</li>
							<li>curl or wget</li>
							<li>sort</li>
							<li>tr</li>
							<li>uniq</li>
							<li>
								<a href="https://en.wikipedia.org/wiki/Strace">
									strace
								</a>
							</li>
							<li>
								<a href="https://danielmiessler.com/study/tcpdump/">
									tcpdump
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="information-theory-videos">
							Information theory (videos)
						</h3>
						<ul>
							<li>
								<a href="https://www.khanacademy.org/computing/computer-science/informationtheory">
									Khan Academy
								</a>
							</li>
							<li>
								More about Markov processes:
								<ul>
									<li>
										<a href="https://www.coursera.org/learn/data-structures-optimizing-performance/lecture/waxgx/core-markov-text-generation">
											Core Markov Text Generation
										</a>
									</li>
									<li>
										<a href="https://www.coursera.org/learn/data-structures-optimizing-performance/lecture/gZhiC/core-implementing-markov-text-generation">
											Core Implementing Markov Text
											Generation
										</a>
									</li>
									<li>
										<a href="https://www.coursera.org/learn/data-structures-optimizing-performance/lecture/EUjrq/project-markov-text-generation-walk-through">
											Project = Markov Text Generation
											Walk Through
										</a>
									</li>
								</ul>
							</li>
							<li>
								See more in MIT 6.050J Information and Entropy
								series below
							</li>
						</ul>
					</li>
					<li>
						<h3 id="parity--hamming-code-videos">
							Parity &amp; Hamming Code (videos)
						</h3>
						<ul>
							<li>
								<a href="https://www.youtube.com/watch?v=q-3BctoUpHE">
									Intro
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=DdMcAUlxh1M">
									Parity
								</a>
							</li>
							<li>
								Hamming Code:
								<ul>
									<li>
										<a href="https://www.youtube.com/watch?v=1A_NcXxdoCc">
											Error detection
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=JAMLuxdHH8o">
											Error correction
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=wbH2VxzmoZk">
									Error Checking
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="entropy">Entropy</h3>
						<ul>
							<li>Also see videos below</li>
							<li>
								Make sure to watch information theory videos
								first
							</li>
							<li>
								<a href="https://youtu.be/JnJq3Py0dyM?t=176">
									Information Theory, Claude Shannon, Entropy,
									Redundancy, Data Compression &amp; Bits
									(video)
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="cryptography">Cryptography</h3>
						<ul>
							<li>Also see videos below</li>
							<li>
								Make sure to watch information theory videos
								first
							</li>
							<li>
								<a href="https://www.khanacademy.org/computing/computer-science/cryptography">
									Khan Academy Series
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=KqqOXndnvic&amp;list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&amp;index=30">
									Cryptography: Hash Functions
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=9TNI2wHmaeI&amp;index=31&amp;list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp">
									Cryptography: Encryption
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="compression">Compression</h3>
						<ul>
							<li>
								Make sure to watch information theory videos
								first
							</li>
							<li>
								Computerphile (videos):
								<ul>
									<li>
										<a href="https://www.youtube.com/watch?v=Lto-ajuqW3w">
											Compression
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=M5c_RFKVkko">
											Entropy in Compression
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=umTbivyJoiI">
											Upside Down Trees (Huffman Trees)
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=DV8efuB3h2g">
											EXTRA BITS/TRITS - Huffman Trees
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=goOa3DGezUA">
											Elegant Compression in Text (The LZ
											77 Method)
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=cCDCfoHTsaU">
											Text Compression Meets Probabilities
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="https://www.youtube.com/playlist?list=PLOU2XLYxmsIJGErt5rrCqaSGTMyyqNt2H">
									Compressor Head videos
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=whGwm0Lky2s">
									(optional) Google Developers Live: GZIP is
									not enough!
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="computer-security">Computer Security</h3>
						<ul>
							<li>
								<a href="https://www.youtube.com/playlist?list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh">
									MIT (23 videos)
								</a>
								<ul>
									<li>
										<a href="https://www.youtube.com/watch?v=GqmQg-cszw4&amp;index=1&amp;list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh">
											Introduction, Threat Models
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=6bwzNg5qQ0o&amp;list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh&amp;index=2">
											Control Hijacking Attacks
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=drQyrzRoRiA&amp;list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh&amp;index=3">
											Buffer Overflow Exploits and
											Defenses
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=6SIJmoE9L9g&amp;index=4&amp;list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh">
											Privilege Separation
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=8VqTSY-11F4&amp;index=5&amp;list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh">
											Capabilities
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=VEV74hwASeU&amp;list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh&amp;index=6">
											Sandboxing Native Code
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=chkFBigodIw&amp;index=7&amp;list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh">
											Web Security Model
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=EBQIGy1ROLY&amp;index=8&amp;list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh">
											Securing Web Applications
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=yRVZPvHYHzw&amp;index=9&amp;list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh">
											Symbolic Execution
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=SIEVvk3NVuk&amp;index=11&amp;list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh">
											Network Security
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=QOtA76ga_fY&amp;index=12&amp;list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh">
											Network Protocols
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=PuVMkSEcPiI&amp;index=15&amp;list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh">
											Side-Channel Attacks
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="garbage-collection">Garbage collection</h3>
						<ul>
							<li>
								<a href="https://www.youtube.com/watch?v=iHVs_HkjdmI">
									GC in Python (video)
								</a>
							</li>
							<li>
								<a href="https://www.infoq.com/presentations/garbage-collection-benefits">
									Deep Dive Java: Garbage Collection is Good!
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=P-8Z0-MhdQs&amp;list=PLdzf4Clw0VbOEWOS_sLhT_9zaiQDrS5AR&amp;index=3">
									Deep Dive Python: Garbage Collection in
									CPython (video)
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="parallel-programming">Parallel Programming</h3>
						<ul>
							<li>
								<a href="https://www.coursera.org/learn/parprog1/home/week/1">
									Coursera (Scala)
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=uY85GkaYzBk">
									Efficient Python for High Performance
									Parallel Computing (video)
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="messaging-serialization-and-queueing-systems">
							Messaging, Serialization, and Queueing Systems
						</h3>
						<ul>
							<li>
								<a href="https://thrift.apache.org/">Thrift</a>
								<ul>
									<li>
										<a href="http://thrift-tutorial.readthedocs.io/en/latest/intro.html">
											Tutorial
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="https://developers.google.com/protocol-buffers/">
									Protocol Buffers
								</a>
								<ul>
									<li>
										<a href="https://developers.google.com/protocol-buffers/docs/tutorials">
											Tutorials
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="http://www.grpc.io/">gRPC</a>
								<ul>
									<li>
										<a href="https://www.youtube.com/watch?v=5tmPvSe7xXQ&amp;list=PLcTqM9n_dieN0k1nSeN36Z_ppKnvMJoly&amp;index=1">
											gRPC 101 for Java Developers (video)
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="http://redis.io/">Redis</a>
								<ul>
									<li>
										<a href="http://try.redis.io/">
											Tutorial
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="https://aws.amazon.com/sqs/">
									Amazon SQS (queue)
								</a>
							</li>
							<li>
								<a href="https://aws.amazon.com/sns/">
									Amazon SNS (pub-sub)
								</a>
							</li>
							<li>
								<a href="https://www.rabbitmq.com/">RabbitMQ</a>
								<ul>
									<li>
										<a href="https://www.rabbitmq.com/getstarted.html">
											Get Started
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="http://www.celeryproject.org/">
									Celery
								</a>
								<ul>
									<li>
										<a href="http://docs.celeryproject.org/en/latest/getting-started/first-steps-with-celery.html">
											First Steps With Celery
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="http://zeromq.org/">ZeroMQ</a>
								<ul>
									<li>
										<a href="http://zeromq.org/intro:read-the-manual">
											Intro - Read The Manual
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="http://activemq.apache.org/">
									ActiveMQ
								</a>
							</li>
							<li>
								<a href="http://kafka.apache.org/documentation.html#introduction">
									Kafka
								</a>
							</li>
							<li>
								<a href="http://msgpack.org/index.html">
									MessagePack
								</a>
							</li>
							<li>
								<a href="https://avro.apache.org/">Avro</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="a">A*</h3>
						<ul>
							<li>
								<a href="https://en.wikipedia.org/wiki/A*_search_algorithm">
									A Search Algorithm
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=-L-WgKMFuhE">
									A* Pathfinding (E01: algorithm explanation)
									(video)
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="fast-fourier-transform">
							Fast Fourier Transform
						</h3>
						<ul>
							<li>
								<a href="https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/">
									An Interactive Guide To The Fourier
									Transform
								</a>
							</li>
							<li>
								<a href="http://www.askamathematician.com/2012/09/q-what-is-a-fourier-transform-what-is-it-used-for/">
									What is a Fourier transform? What is it used
									for?
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=Xxut2PN-V8Q">
									What is the Fourier Transform? (video)
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=iTMn0Kt18tg&amp;list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&amp;index=4">
									Divide &amp; Conquer: FFT (video)
								</a>
							</li>
							<li>
								<a href="http://jakevdp.github.io/blog/2013/08/28/understanding-the-fft/">
									Understanding The FFT
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="bloom-filter">Bloom Filter</h3>
						<ul>
							<li>
								Given a Bloom filter with m bits and k hashing
								functions, both insertion and membership testing
								are O(k)
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=-SuTGoFYjZs">
									Bloom Filters (video)
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=qBTdukbzc78">
									Bloom Filters | Mining of Massive Datasets |
									Stanford University (video)
								</a>
							</li>
							<li>
								<a href="http://billmill.org/bloomfilter-tutorial/">
									Tutorial
								</a>
							</li>
							<li>
								<a href="http://blog.michaelschmatz.com/2016/04/11/how-to-write-a-bloom-filter-cpp/">
									How To Write A Bloom Filter App
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="hyperloglog">HyperLogLog</h3>
						<ul>
							<li>
								<a href="http://highscalability.com/blog/2012/4/5/big-data-counting-how-to-count-a-billion-distinct-objects-us.html">
									How To Count A Billion Distinct Objects
									Using Only 1.5KB Of Memory
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="locality-sensitive-hashing">
							Locality-Sensitive Hashing
						</h3>
						<ul>
							<li>
								Used to determine the similarity of documents
							</li>
							<li>
								The opposite of MD5 or SHA which are used to
								determine if 2 documents/strings are exactly the
								same
							</li>
							<li>
								<a href="http://ferd.ca/simhashing-hopefully-made-simple.html">
									Simhashing (hopefully) made simple
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="van-emde-boas-trees">van Emde Boas Trees</h3>
						<ul>
							<li>
								<a href="https://www.youtube.com/watch?v=hmReJCupbNU&amp;list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&amp;index=6">
									Divide &amp; Conquer: van Emde Boas Trees
									(video)
								</a>
							</li>
							<li>
								<a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2012/lecture-notes/MIT6_046JS12_lec15.pdf">
									MIT Lecture Notes
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="augmented-data-structures">
							Augmented Data Structures
						</h3>
						<ul>
							<li>
								<a href="https://archive.org/details/ucberkeley_webcast_zksIj9O8_jc">
									CS 61B Lecture 39: Augmenting Data
									Structures
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="balanced-search-trees">
							Balanced search trees
						</h3>
						<ul>
							<li>
								<p>
									Know at least one type of balanced binary
									tree (and know how it&#39;s implemented):
								</p>
							</li>
							<li>
								<p>
									&quot;Among balanced search trees, AVL and
									2/3 trees are now passé, and red-black trees
									seem to be more popular. A particularly
									interesting self-organizing data structure
									is the splay tree, which uses rotations to
									move any accessed key to the root.&quot; -
									Skiena
								</p>
							</li>
							<li>
								<p>
									Of these, I chose to implement a splay tree.
									From what I&#39;ve read, you won&#39;t
									implement a balanced search tree in your
									interview. But I wanted exposure to coding
									one up and let&#39;s face it, splay trees
									are the bee&#39;s knees. I did read a lot of
									red-black tree code
								</p>
								<ul>
									<li>
										Splay tree: insert, search, delete
										functions If you end up implementing
										red/black tree try just these:
									</li>
									<li>
										Search and insertion functions, skipping
										delete
									</li>
								</ul>
							</li>
							<li>
								<p>
									I want to learn more about B-Tree since
									it&#39;s used so widely with very large data
									sets
								</p>
							</li>
							<li>
								<p>
									<a href="https://en.wikipedia.org/wiki/Self-balancing_binary_search_tree">
										Self-balancing binary search tree
									</a>
								</p>
							</li>
							<li>
								<p>
									<strong>AVL trees</strong>
								</p>
								<ul>
									<li>
										In practice: From what I can tell, these
										aren&#39;t used much in practice, but I
										could see where they would be: The AVL
										tree is another structure supporting
										O(log n) search, insertion, and removal.
										It is more rigidly balanced than
										red–black trees, leading to slower
										insertion and removal but faster
										retrieval. This makes it attractive for
										data structures that may be built once
										and loaded without reconstruction, such
										as language dictionaries (or program
										dictionaries, such as the opcodes of an
										assembler or interpreter)
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=FNeL18KsWPc&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&amp;index=6">
											MIT AVL Trees / AVL Sort (video)
										</a>
									</li>
									<li>
										<a href="https://www.coursera.org/learn/data-structures/lecture/Qq5E0/avl-trees">
											AVL Trees (video)
										</a>
									</li>
									<li>
										<a href="https://www.coursera.org/learn/data-structures/lecture/PKEBC/avl-tree-implementation">
											AVL Tree Implementation (video)
										</a>
									</li>
									<li>
										<a href="https://www.coursera.org/learn/data-structures/lecture/22BgE/split-and-merge">
											Split And Merge
										</a>
									</li>
								</ul>
							</li>
							<li>
								<p>
									<strong>Splay trees</strong>
								</p>
								<ul>
									<li>
										In practice: Splay trees are typically
										used in the implementation of caches,
										memory allocators, routers, garbage
										collectors, data compression, ropes
										(replacement of string used for long
										text strings), in Windows NT (in the
										virtual memory, networking and file
										system code) etc
									</li>
									<li>
										<a href="https://archive.org/details/ucberkeley_webcast_G5QIXywcJlY">
											CS 61B: Splay Trees (video)
										</a>
									</li>
									<li>
										MIT Lecture: Splay Trees:
										<ul>
											<li>
												Gets very mathy, but watch the
												last 10 minutes for sure.
											</li>
											<li>
												<a href="https://www.youtube.com/watch?v=QnPl_Y6EqMo">
													Video
												</a>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								<p>
									<strong>Red/black trees</strong>
								</p>
								<ul>
									<li>
										These are a translation of a 2-3 tree
										(see below).
									</li>
									<li>
										In practice: Red–black trees offer
										worst-case guarantees for insertion
										time, deletion time, and search time.
										Not only does this make them valuable in
										time-sensitive applications such as
										real-time applications, but it makes
										them valuable building blocks in other
										data structures which provide worst-case
										guarantees; for example, many data
										structures used in computational
										geometry can be based on red–black
										trees, and the Completely Fair Scheduler
										used in current Linux kernels uses
										red–black trees. In the version 8 of
										Java, the Collection HashMap has been
										modified such that instead of using a
										LinkedList to store identical elements
										with poor hashcodes, a Red-Black tree is
										used
									</li>
									<li>
										<a href="https://youtu.be/1W3x0f_RmUo?list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&amp;t=3871">
											Aduni - Algorithms - Lecture 4 (link
											jumps to starting point) (video)
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=hm2GHwyKF1o&amp;list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&amp;index=5">
											Aduni - Algorithms - Lecture 5
											(video)
										</a>
									</li>
									<li>
										<a href="https://en.wikipedia.org/wiki/Red%E2%80%93black_tree">
											Red-Black Tree
										</a>
									</li>
									<li>
										<a href="https://www.topcoder.com/thrive/articles/An%20Introduction%20to%20Binary%20Search%20and%20Red-Black%20Trees">
											An Introduction To Binary Search And
											Red Black Tree
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/playlist?list=PL9xmBV_5YoZNqDI8qfOZgzbqahCUmUEin">
											[Review] Red-Black Trees (playlist)
											in 30 minutes (video)
										</a>
									</li>
								</ul>
							</li>
							<li>
								<p>
									<strong>2-3 search trees</strong>
								</p>
								<ul>
									<li>
										In practice: 2-3 trees have faster
										inserts at the expense of slower
										searches (since height is more compared
										to AVL trees).
									</li>
									<li>
										You would use 2-3 tree very rarely
										because its implementation involves
										different types of nodes. Instead,
										people use Red Black trees.
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=C3SsdUqasD4&amp;list=PLA5Lqm4uh9Bbq-E0ZnqTIa8LRaL77ica6&amp;index=2">
											23-Tree Intuition and Definition
											(video)
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=iYvBtGKsqSg&amp;index=3&amp;list=PLA5Lqm4uh9Bbq-E0ZnqTIa8LRaL77ica6">
											Binary View of 23-Tree
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=TOb1tuEZ2X4&amp;index=5&amp;list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp">
											2-3 Trees (student recitation)
											(video)
										</a>
									</li>
								</ul>
							</li>
							<li>
								<p>
									<strong>2-3-4 Trees (aka 2-4 trees)</strong>
								</p>
								<ul>
									<li>
										In practice: For every 2-4 tree, there
										are corresponding red–black trees with
										data elements in the same order. The
										insertion and deletion operations on 2-4
										trees are also equivalent to
										color-flipping and rotations in
										red–black trees. This makes 2-4 trees an
										important tool for understanding the
										logic behind red–black trees, and this
										is why many introductory algorithm texts
										introduce 2-4 trees just before
										red–black trees, even though{" "}
										<strong>
											2-4 trees are not often used in
											practice
										</strong>
										.
									</li>
									<li>
										<a href="https://archive.org/details/ucberkeley_webcast_zqrqYXkth6Q">
											CS 61B Lecture 26: Balanced Search
											Trees (video)
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=DQdMYevEyE4&amp;index=4&amp;list=PLA5Lqm4uh9Bbq-E0ZnqTIa8LRaL77ica6">
											Bottom Up 234-Trees (video)
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=2679VQ26Fp4&amp;list=PLA5Lqm4uh9Bbq-E0ZnqTIa8LRaL77ica6&amp;index=5">
											Top Down 234-Trees (video)
										</a>
									</li>
								</ul>
							</li>
							<li>
								<p>
									<strong>N-ary (K-ary, M-ary) trees</strong>
								</p>
								<ul>
									<li>
										note: the N or K is the branching factor
										(max branches)
									</li>
									<li>
										binary trees are a 2-ary tree, with
										branching factor = 2
									</li>
									<li>2-3 trees are 3-ary</li>
									<li>
										<a href="https://en.wikipedia.org/wiki/K-ary_tree">
											K-Ary Tree
										</a>
									</li>
								</ul>
							</li>
							<li>
								<p>
									<strong>B-Trees</strong>
								</p>
								<ul>
									<li>
										Fun fact: it&#39;s a mystery, but the B
										could stand for Boeing, Balanced, or
										Bayer (co-inventor).
									</li>
									<li>
										In Practice: B-Trees are widely used in
										databases. Most modern filesystems use
										B-trees (or Variants). In addition to
										its use in databases, the B-tree is also
										used in filesystems to allow quick
										random access to an arbitrary block in a
										particular file. The basic problem is
										turning the file block i address into a
										disk block (or perhaps to a
										cylinder-head-sector) address
									</li>
									<li>
										<a href="https://en.wikipedia.org/wiki/B-tree">
											B-Tree
										</a>
									</li>
									<li>
										<a href="http://btechsmartclass.com/data_structures/b-trees.html">
											B-Tree Datastructure
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=I22wEC1tTGo&amp;list=PLA5Lqm4uh9Bbq-E0ZnqTIa8LRaL77ica6&amp;index=6">
											Introduction to B-Trees (video)
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=s3bCdZGrgpA&amp;index=7&amp;list=PLA5Lqm4uh9Bbq-E0ZnqTIa8LRaL77ica6">
											B-Tree Definition and Insertion
											(video)
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=svfnVhJOfMc&amp;index=8&amp;list=PLA5Lqm4uh9Bbq-E0ZnqTIa8LRaL77ica6">
											B-Tree Deletion (video)
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=V3omVLzI0WE&amp;index=7&amp;list=PLUl4u3cNGP61hsJNdULdudlRL493b-XZf">
											MIT 6.851 - Memory Hierarchy Models
											(video)
										</a>
										- covers cache-oblivious B-Trees, very
										interesting data structures - the first
										37 minutes are very technical, may be
										skipped (B is block size, cache line
										size)
									</li>
									<li>
										<a href="https://www.youtube.com/playlist?list=PL9xmBV_5YoZNFPPv98DjTdD9X6UI9KMHz">
											[Review] B-Trees (playlist) in 26
											minutes (video)
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="k-d-trees">k-D Trees</h3>
						<ul>
							<li>
								Great for finding number of points in a
								rectangle or higher dimension object
							</li>
							<li>A good fit for k-nearest neighbors</li>
							<li>
								<a href="https://www.youtube.com/watch?v=Y4ZgLlDfKDg">
									kNN K-d tree algorithm (video)
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="skip-lists">Skip lists</h3>
						<ul>
							<li>
								&quot;These are somewhat of a cult data
								structure&quot; - Skiena
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=2g9OSRKJuzM&amp;index=10&amp;list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp">
									Randomization: Skip Lists (video)
								</a>
							</li>
							<li>
								<a href="https://en.wikipedia.org/wiki/Skip_list">
									For animations and a little more detail
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="network-flows">Network Flows</h3>
						<ul>
							<li>
								<a href="https://www.youtube.com/watch?v=Tl90tNtKvxs">
									Ford-Fulkerson in 5 minutes — Step by step
									example (video)
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=v1VgJmkEJW0">
									Ford-Fulkerson Algorithm (video)
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=2vhN4Ice5jI">
									Network Flows (video)
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="disjoint-sets--union-find">
							Disjoint Sets &amp; Union Find
						</h3>
						<ul>
							<li>
								<a href="https://archive.org/details/ucberkeley_webcast_MAEGXTwmUsI">
									UCB 61B - Disjoint Sets; Sorting &amp;
									selection (video)
								</a>
							</li>
							<li>
								<a href="https://www.coursera.org/learn/algorithms-part1/home/week/1">
									Sedgewick Algorithms - Union-Find (6 videos)
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="math-for-fast-processing">
							Math for Fast Processing
						</h3>
						<ul>
							<li>
								<a href="https://www.youtube.com/watch?v=eCaXlAaN2uE&amp;index=11&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb">
									Integer Arithmetic, Karatsuba Multiplication
									(video)
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=ru7mWZJlRQg">
									The Chinese Remainder Theorem (used in
									cryptography) (video)
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="treap">Treap</h3>
						<ul>
							<li>
								Combination of a binary search tree and a heap
							</li>
							<li>
								<a href="https://en.wikipedia.org/wiki/Treap">
									Treap
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=6podLUYinH8">
									Data Structures: Treaps explained (video)
								</a>
							</li>
							<li>
								<a href="https://www.cs.cmu.edu/~scandal/papers/treaps-spaa98.pdf">
									Applications in set operations
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="linear-programming-videos">
							Linear Programming (videos)
						</h3>
						<ul>
							<li>
								<a href="https://www.youtube.com/watch?v=M4K6HYLHREQ">
									Linear Programming
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=2ACJ9ewUC6U">
									Finding minimum cost
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=8AA_81xI3ik">
									Finding maximum value
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=44pAWI7v5Zk">
									Solve Linear Equations with Python - Simplex
									Algorithm
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="geometry-convex-hull-videos">
							Geometry, Convex hull (videos)
						</h3>
						<ul>
							<li>
								<a href="https://youtu.be/XIAQRlNkJAw?list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&amp;t=3164">
									Graph Alg. IV: Intro to geometric algorithms
									- Lecture 9
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=J5aJEcOr6Eo&amp;index=10&amp;list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm">
									Geometric Algorithms: Graham &amp; Jarvis -
									Lecture 10
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=EzeYI7p9MjU&amp;list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&amp;index=2">
									Divide &amp; Conquer: Convex Hull, Median
									Finding
								</a>
							</li>
						</ul>
					</li>
					<li>
						<h3 id="discrete-math">Discrete math</h3>
						<ul>
							<li>
								<a href="http://www.infocobuild.com/education/audio-video-courses/computer-science/cs70-spring2015-berkeley.html">
									Computer Science 70, 001 - Spring 2015 -
									Discrete Mathematics and Probability Theory
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/playlist?list=PLWX710qNZo_sNlSWRMVIh6kfTjolNaZ8t">
									Discrete Mathematics by Shai Simonson (19
									videos)
								</a>
							</li>
							<li>
								<a href="https://nptel.ac.in/courses/106/106/106106183/">
									Discrete Mathematics By IIT Ropar NPTEL
								</a>
							</li>
						</ul>
					</li>
				</ul>
				<hr />
				<h2 id="additional-detail-on-some-subjects">
					Additional Detail on Some Subjects
				</h2>
				<pre>
					<code>
						I added these to reinforce some ideas already presented
						above, but didn&#39;t want to include them above because
						it&#39;s just too much. It&#39;s easy to overdo it on a
						subject. You want to get hired in this century, right?
					</code>
				</pre>
				<ul>
					<li>
						<p>
							<strong>SOLID</strong>{" "}
						</p>
						<ul>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="457"
									checked={checked[457]}
									size="medium"
								/>{" "}
								<a href="https://www.youtube.com/watch?v=TMuno5RZNeE">
									Bob Martin SOLID Principles of Object
									Oriented and Agile Design (video)
								</a>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="458"
									checked={checked[458]}
									size="medium"
								/>{" "}
								S -{" "}
								<a href="http://www.oodesign.com/single-responsibility-principle.html">
									Single Responsibility Principle
								</a>{" "}
								|{" "}
								<a href="http://www.javacodegeeks.com/2011/11/solid-single-responsibility-principle.html">
									Single responsibility to each Object
								</a>
								<ul>
									<li>
										<a href="https://docs.google.com/open?id=0ByOwmqah_nuGNHEtcU5OekdDMkk">
											more flavor
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="459"
									checked={checked[459]}
									size="medium"
								/>{" "}
								O -{" "}
								<a href="http://www.oodesign.com/open-close-principle.html">
									Open/Closed Principle
								</a>{" "}
								|{" "}
								<a href="https://en.wikipedia.org/wiki/Open/closed_principle">
									On production level Objects are ready for
									extension but not for modification
								</a>
								<ul>
									<li>
										<a href="http://docs.google.com/a/cleancoder.com/viewer?a=v&amp;pid=explorer&amp;chrome=true&amp;srcid=0BwhCYaYDn8EgN2M5MTkwM2EtNWFkZC00ZTI3LWFjZTUtNTFhZGZiYmUzODc1&amp;hl=en">
											more flavor
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="460"
									checked={checked[460]}
									size="medium"
								/>{" "}
								L -{" "}
								<a href="http://www.oodesign.com/liskov-s-substitution-principle.html">
									Liskov Substitution Principle
								</a>{" "}
								|{" "}
								<a href="http://stackoverflow.com/questions/56860/what-is-the-liskov-substitution-principle">
									Base Class and Derived class follow ‘IS A’
									Principle
								</a>
								<ul>
									<li>
										<a href="http://docs.google.com/a/cleancoder.com/viewer?a=v&amp;pid=explorer&amp;chrome=true&amp;srcid=0BwhCYaYDn8EgNzAzZjA5ZmItNjU3NS00MzQ5LTkwYjMtMDJhNDU5ZTM0MTlh&amp;hl=en">
											more flavor
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="461"
									checked={checked[461]}
									size="medium"
								/>{" "}
								I -{" "}
								<a href="http://www.oodesign.com/interface-segregation-principle.html">
									Interface segregation principle
								</a>{" "}
								| clients should not be forced to implement
								interfaces they don&#39;t use
								<ul>
									<li>
										<a href="https://www.youtube.com/watch?v=3CtAfl7aXAQ">
											Interface Segregation Principle in 5
											minutes (video)
										</a>
									</li>
									<li>
										<a href="http://docs.google.com/a/cleancoder.com/viewer?a=v&amp;pid=explorer&amp;chrome=true&amp;srcid=0BwhCYaYDn8EgOTViYjJhYzMtMzYxMC00MzFjLWJjMzYtOGJiMDc5N2JkYmJi&amp;hl=en">
											more flavor
										</a>
									</li>
								</ul>
							</li>
							<li className="with-check">
								<Checkbox
									onClick={(e) => handleCheckClick(e)}
									id="462"
									checked={checked[462]}
									size="medium"
								/>{" "}
								D -
								<a href="http://www.oodesign.com/dependency-inversion-principle.html">
									Dependency Inversion principle
								</a>{" "}
								| Reduce the dependency In composition of
								objects.
								<ul>
									<li>
										<a href="http://stackoverflow.com/questions/62539/what-is-the-dependency-inversion-principle-and-why-is-it-important">
											Why Is The Dependency Inversion
											Principle And Why Is It Important
										</a>
									</li>
									<li>
										<a href="http://docs.google.com/a/cleancoder.com/viewer?a=v&amp;pid=explorer&amp;chrome=true&amp;srcid=0BwhCYaYDn8EgMjdlMWIzNGUtZTQ0NC00ZjQ5LTkwYzQtZjRhMDRlNTQ3ZGMz&amp;hl=en">
											more flavor
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<p>
							<strong>Union-Find</strong>
						</p>
						<ul>
							<li>
								<a href="https://www.coursera.org/learn/data-structures/lecture/JssSY/overview">
									Overview
								</a>
							</li>
							<li>
								<a href="https://www.coursera.org/learn/data-structures/lecture/EM5D0/naive-implementations">
									Naive Implementation
								</a>
							</li>
							<li>
								<a href="https://www.coursera.org/learn/data-structures/lecture/Mxu0w/trees">
									Trees
								</a>
							</li>
							<li>
								<a href="https://www.coursera.org/learn/data-structures/lecture/qb4c2/union-by-rank">
									Union By Rank
								</a>
							</li>
							<li>
								<a href="https://www.coursera.org/learn/data-structures/lecture/Q9CVI/path-compression">
									Path Compression
								</a>
							</li>
							<li>
								<a href="https://www.coursera.org/learn/data-structures/lecture/GQQLN/analysis-optional">
									Analysis Options
								</a>
							</li>
						</ul>
					</li>
					<li>
						<p>
							<strong>More Dynamic Programming</strong> (videos)
						</p>
						<ul>
							<li>
								<a href="https://www.youtube.com/watch?v=r4-cftqTcdI&amp;ab_channel=MITOpenCourseWare">
									6.006: Dynamic Programming I: Fibonacci,
									Shortest Paths
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=KLBCUx1is2c&amp;ab_channel=MITOpenCourseWare">
									6.006: Dynamic Programming II: Text
									Justification, Blackjack
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=TDo3r5M1LNo&amp;ab_channel=MITOpenCourseWare">
									6.006: DP III: Parenthesization, Edit
									Distance, Knapsack
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=i9OAOk0CUQE&amp;ab_channel=MITOpenCourseWare">
									6.006: DP IV: Guitar Fingering, Tetris,
									Super Mario Bros.
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=Tw1k46ywN6E&amp;index=14&amp;list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp">
									6.046: Dynamic Programming &amp; Advanced DP
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=NzgFUwOaoIw&amp;list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&amp;index=15">
									6.046: Dynamic Programming: All-Pairs
									Shortest Paths
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=krZI60lKPek&amp;list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&amp;index=12">
									6.046: Dynamic Programming (student
									recitation)
								</a>
							</li>
						</ul>
					</li>
					<li>
						<p>
							<strong>Advanced Graph Processing</strong> (videos)
						</p>
						<ul>
							<li>
								<a href="https://www.youtube.com/watch?v=mUBmcbbJNf4&amp;list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&amp;index=27">
									Synchronous Distributed Algorithms:
									Symmetry-Breaking. Shortest-Paths Spanning
									Trees
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=kQ-UQAzcnzA&amp;list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&amp;index=28">
									Asynchronous Distributed Algorithms:
									Shortest-Paths Spanning Trees
								</a>
							</li>
						</ul>
					</li>
					<li>
						<p>
							MIT <strong>Probability</strong> (mathy, and go
							slowly, which is good for mathy things) (videos):
						</p>
						<ul>
							<li>
								<a href="https://www.youtube.com/watch?v=SmFwFdESMHI&amp;index=18&amp;list=PLB7540DEDD482705B">
									MIT 6.042J - Probability Introduction
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=E6FbvM-FGZ8&amp;index=19&amp;list=PLB7540DEDD482705B">
									MIT 6.042J - Conditional Probability
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=l1BCv3qqW4A&amp;index=20&amp;list=PLB7540DEDD482705B">
									MIT 6.042J - Independence
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=MOfhhFaQdjw&amp;list=PLB7540DEDD482705B&amp;index=21">
									MIT 6.042J - Random Variables
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=gGlMSe7uEkA&amp;index=22&amp;list=PLB7540DEDD482705B">
									MIT 6.042J - Expectation I
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=oI9fMUqgfxY&amp;index=23&amp;list=PLB7540DEDD482705B">
									MIT 6.042J - Expectation II
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=q4mwO2qS2z4&amp;index=24&amp;list=PLB7540DEDD482705B">
									MIT 6.042J - Large Deviations
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=56iFMY8QW2k&amp;list=PLB7540DEDD482705B&amp;index=25">
									MIT 6.042J - Random Walks
								</a>
							</li>
						</ul>
					</li>
					<li>
						<p>
							<a href="https://www.youtube.com/watch?v=oDniZCmNmNw&amp;list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&amp;index=19">
								Simonson: Approximation Algorithms (video)
							</a>
						</p>
					</li>
					<li>
						<p>
							<strong>String Matching</strong>
						</p>
						<ul>
							<li>
								Rabin-Karp (videos):
								<ul>
									<li>
										<a href="https://www.coursera.org/lecture/data-structures/rabin-karps-algorithm-c0Qkw">
											Rabin Karps Algorithm
										</a>
									</li>
									<li>
										<a href="https://www.coursera.org/learn/data-structures/lecture/nYrc8/optimization-precomputation">
											Precomputing
										</a>
									</li>
									<li>
										<a href="https://www.coursera.org/learn/data-structures/lecture/h4ZLc/optimization-implementation-and-analysis">
											Optimization: Implementation and
											Analysis
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=BRO7mVIFt08&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&amp;index=9">
											Table Doubling, Karp-Rabin
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=w6nuXg0BISo&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&amp;index=32">
											Rolling Hashes, Amortized Analysis
										</a>
									</li>
								</ul>
							</li>
							<li>
								Knuth-Morris-Pratt (KMP):
								<ul>
									<li>
										<a href="https://www.youtube.com/watch?v=5i7oKodCRJo">
											TThe Knuth-Morris-Pratt (KMP) String
											Matching Algorithm
										</a>
									</li>
								</ul>
							</li>
							<li>
								Boyer–Moore string search algorithm
								<ul>
									<li>
										<a href="https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_string_search_algorithm">
											Boyer-Moore String Search Algorithm
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=QDZpzctPf10">
											Advanced String Searching
											Boyer-Moore-Horspool Algorithms
											(video)
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="https://www.coursera.org/learn/algorithms-on-strings/home/week/1">
									Coursera: Algorithms on Strings
								</a>
								<ul>
									<li>
										starts off great, but by the time it
										gets past KMP it gets more complicated
										than it needs to be
									</li>
									<li>nice explanation of tries</li>
									<li>can be skipped</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<p>
							<strong>Sorting</strong>
						</p>
						<ul>
							<li>
								Stanford lectures on sorting:
								<ul>
									<li>
										<a href="https://www.youtube.com/watch?v=ENp00xylP7c&amp;index=15&amp;list=PLFE6E58F856038C69">
											Lecture 15 | Programming
											Abstractions (video)
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=y4M9IVgrVKo&amp;index=16&amp;list=PLFE6E58F856038C69">
											Lecture 16 | Programming
											Abstractions (video)
										</a>
									</li>
								</ul>
							</li>
							<li>
								Shai Simonson,{" "}
								<a href="http://www.aduni.org/">Aduni.org</a>:
								<ul>
									<li>
										<a href="https://www.youtube.com/watch?v=odNJmw5TOEE&amp;list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&amp;index=2">
											Algorithms - Sorting - Lecture 2
											(video)
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=hj8YKFTFKEE&amp;list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&amp;index=3">
											Algorithms - Sorting II - Lecture 3
											(video)
										</a>
									</li>
								</ul>
							</li>
							<li>
								Steven Skiena lectures on sorting:
								<ul>
									<li>
										<a href="https://www.youtube.com/watch?v=jUf-UQ3a0kg&amp;list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&amp;index=8">
											CSE373 2020 - Mergesort/Quicksort
											(video)
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=0ksyQKmre84&amp;list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&amp;index=9">
											CSE373 2020 - Linear Sorting (video)
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<p>
							NAND To Tetris:{" "}
							<a href="https://www.coursera.org/learn/build-a-computer">
								Build a Modern Computer from First Principles
							</a>
						</p>
					</li>
				</ul>
				<h2 id="video-series">Video Series</h2>
				<p>Sit back and enjoy.</p>
				<ul>
					<li>
						<p>
							<a href="https://www.youtube.com/playlist?list=PLrmLmBdmIlpsHaNTPP_jHHDx_os9ItYXr">
								List of individual Dynamic Programming problems
								(each is short)
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.youtube.com/playlist?list=PL038BE01D3BAEFDB0">
								x86 Architecture, Assembly, Applications (11
								videos)
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.youtube.com/playlist?list=PLE7DDD91010BC51F8">
								MIT 18.06 Linear Algebra, Spring 2005 (35
								videos)
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.youtube.com/playlist?list=PL3B08AE665AB9002A">
								Excellent - MIT Calculus Revisited: Single
								Variable Calculus
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.youtube.com/watch?v=22hwcnXIGgk&amp;list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&amp;index=1">
								Skiena lectures from Algorithm Design Manual -
								CSE373 2020 - Analysis of Algorithms (26 videos)
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://archive.org/details/ucberkeley-webcast-PL-XXv-cvA_iAlnI-BQr9hjqADPBtujFJd">
								UC Berkeley 61B (Spring 2014): Data Structures
								(25 videos)
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://archive.org/details/ucberkeley-webcast-PL4BBB74C7D2A1049C">
								UC Berkeley 61B (Fall 2006): Data Structures (39
								videos)
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://archive.org/details/ucberkeley-webcast-PL-XXv-cvA_iCl2-D-FS5mk0jFF6cYSJs_">
								UC Berkeley 61C: Machine Structures (26 videos)
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.youtube.com/playlist?list=PLJ9pm_Rc9HesnkwKlal_buSIHA-jTZMpO">
								OOSE: Software Dev Using UML and Java (21
								videos)
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.youtube.com/playlist?list=PLDSlqjcPpoL64CJdF0Qee5oWqGS6we_Yu">
								MIT 6.004: Computation Structures (49 videos)
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.youtube.com/playlist?list=PL5PHm2jkkXmi5CxxI7b3JCL1TWybTDtKq">
								Carnegie Mellon - Computer Architecture Lectures
								(39 videos)
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.youtube.com/watch?v=HtSuA80QTyo&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&amp;nohtml5=False">
								MIT 6.006: Intro to Algorithms (47 videos)
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.youtube.com/watch?v=zm2VP0kHl1M&amp;list=PL6535748F59DCA484">
								MIT 6.033: Computer System Engineering (22
								videos)
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.youtube.com/playlist?list=PLUl4u3cNGP63gFHB6xb-kVBiQHYe_4hSi">
								MIT 6.034 Artificial Intelligence, Fall 2010 (30
								videos)
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.youtube.com/watch?v=L3LMbpZIKhQ&amp;list=PLB7540DEDD482705B">
								MIT 6.042J: Mathematics for Computer Science,
								Fall 2010 (25 videos)
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.youtube.com/watch?v=2P-yW7LQr08&amp;list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp">
								MIT 6.046: Design and Analysis of Algorithms (34
								videos)
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.youtube.com/watch?v=cQP8WApzIQQ&amp;list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB">
								MIT 6.824: Distributed Systems, Spring 2020 (20
								videos)
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.youtube.com/watch?v=T0yzrZL1py0&amp;list=PLUl4u3cNGP61hsJNdULdudlRL493b-XZf&amp;index=1">
								MIT 6.851: Advanced Data Structures (22 videos)
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.youtube.com/playlist?list=PL6ogFv-ieghdoGKGg2Bik3Gl1glBTEu8c">
								MIT 6.854: Advanced Algorithms, Spring 2016 (24
								videos)
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.youtube.com/playlist?list=PL2SOU6wwxB0uP4rJgf5ayhHWgw7akUWSf">
								Harvard COMPSCI 224: Advanced Algorithms (25
								videos)
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.youtube.com/watch?v=GqmQg-cszw4&amp;index=1&amp;list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh">
								MIT 6.858 Computer Systems Security, Fall 2014
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.youtube.com/playlist?list=PL9D558D49CA734A02">
								Stanford: Programming Paradigms (27 videos)
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.youtube.com/playlist?list=PL6N5qY2nvvJE8X75VkXglSrVhLv1tVcfy">
								Introduction to Cryptography by Christof Paar
							</a>
						</p>
						<ul>
							<li>
								<a href="http://www.crypto-textbook.com/">
									Course Website along with Slides and Problem
									Sets
								</a>
							</li>
						</ul>
					</li>
					<li>
						<p>
							<a href="https://www.youtube.com/playlist?list=PLLssT5z_DsK9JDLcT8T62VtzwyW9LNepV">
								Mining Massive Datasets - Stanford University
								(94 videos)
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.youtube.com/user/DrSaradaHerke/playlists?shelf_id=5&amp;view=50&amp;sort=dd">
								Graph Theory by Sarada Herke (67 videos)
							</a>
						</p>
					</li>
				</ul>
				<h2 id="computer-science-courses">Computer Science Courses</h2>
				<ul>
					<li>
						<a href="https://github.com/open-source-society/computer-science">
							Directory of Online CS Courses
						</a>
					</li>
					<li>
						<a href="https://github.com/prakhar1989/awesome-courses">
							Directory of CS Courses (many with online lectures)
						</a>
					</li>
				</ul>
				<h2 id="algorithms-implementation">
					Algorithms implementation
				</h2>
				<ul>
					<li>
						<a href="https://algs4.cs.princeton.edu/code">
							Multiple Algorithms implementation by Princeton
							University
						</a>
					</li>
				</ul>
				<h2 id="papers">Papers</h2>
				<ul>
					<li>
						<a href="https://www.cs.cmu.edu/~crary/819-f09/">
							Love classic papers?
						</a>
					</li>
					<li>
						<a href="http://spinroot.com/courses/summer/Papers/hoare_1978.pdf">
							1978: Communicating Sequential Processes
						</a>
						<ul>
							<li>
								<a href="https://godoc.org/github.com/thomas11/csp">
									implemented in Go
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="http://static.googleusercontent.com/media/research.google.com/en//archive/gfs-sosp2003.pdf">
							2003: The Google File System
						</a>
						<ul>
							<li>replaced by Colossus in 2012</li>
						</ul>
					</li>
					<li>
						<a href="http://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf">
							2004: MapReduce: Simplified Data Processing on Large
							Clusters
						</a>
						<ul>
							<li>mostly replaced by Cloud Dataflow?</li>
						</ul>
					</li>
					<li>
						<a href="https://static.googleusercontent.com/media/research.google.com/en//archive/bigtable-osdi06.pdf">
							2006: Bigtable: A Distributed Storage System for
							Structured Data
						</a>
					</li>
					<li>
						<a href="https://research.google.com/archive/chubby-osdi06.pdf">
							2006: The Chubby Lock Service for Loosely-Coupled
							Distributed Systems
						</a>
					</li>
					<li>
						<a href="http://s3.amazonaws.com/AllThingsDistributed/sosp/amazon-dynamo-sosp2007.pdf">
							2007: Dynamo: Amazon’s Highly Available Key-value
							Store
						</a>
						<ul>
							<li>
								The Dynamo paper kicked off the NoSQL revolution
							</li>
						</ul>
					</li>
					<li>
						<a href="https://www.akkadia.org/drepper/cpumemory.pdf">
							2007: What Every Programmer Should Know About Memory
							(very long, and the author encourages skipping of
							some sections)
						</a>
					</li>
					<li>
						2012: AddressSanitizer: A Fast Address Sanity Checker:
						<ul>
							<li>
								<a href="http://static.googleusercontent.com/media/research.google.com/en//pubs/archive/37752.pdf">
									paper
								</a>
							</li>
							<li>
								<a href="https://www.usenix.org/conference/atc12/technical-sessions/presentation/serebryany">
									video
								</a>
							</li>
						</ul>
					</li>
					<li>
						2013: Spanner: Google’s Globally-Distributed Database:
						<ul>
							<li>
								<a href="http://static.googleusercontent.com/media/research.google.com/en//archive/spanner-osdi2012.pdf">
									paper
								</a>
							</li>
							<li>
								<a href="https://www.usenix.org/node/170855">
									video
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="http://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43790.pdf">
							2015: Continuous Pipelines at Google
						</a>
					</li>
					<li>
						<a href="https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/44686.pdf">
							2015: High-Availability at Massive Scale: Building
							Google’s Data Infrastructure for Ads
						</a>
					</li>
					<li>
						<a href="http://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43835.pdf">
							2015: How Developers Search for Code: A Case Study
						</a>
					</li>
					<li>
						More papers:{" "}
						<a href="https://github.com/0voice/computer_expert_paper">
							1,000 papers
						</a>
					</li>
				</ul>
				<h2 id="license">LICENSE</h2>
				<p>
					<a href="./LICENSE.txt">CC-BY-SA-4.0</a>
				</p>
			</div>
		</div>
	);
};

export default Home;
