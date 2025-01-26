import React from "react";
import "../../style.css";
/* import './Education.css' */
function Education() {
  const handlemca=()=>{
    window.open('https://drive.google.com/file/d/1iloRI4zYNS9AkRePPqDh-rLqsF6rLO_n/view?usp=sharing','_blank_')

  }
  const handlebsccs=()=>{
    window.open('https://drive.google.com/file/d/11SMcTkFhBGJnPr0l_dlRLmWtgn5-yj91/view?usp=sharing','_blank_')

  }
  const handle12=()=>{
    window.open('https://drive.google.com/file/d/1E6B44K-5QwTrEvMPQe_Q70ZilR0PYuid/view?usp=sharing','_blank_')

  }
  const handle10=()=>{
    window.open('https://drive.google.com/file/d/1jy6q9peeY_k_5cMPi3dOzArN52pLp88x/view?usp=sharing','_blank_')

  }
  return (
    
    <div class="wrapper">
    <div class="center-line">
      {/* <a href="#" class="scroll-icon"><i class="fas fa-caret-up"></i></a> */}
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-home"></i>
        <div class="details">
          <span class="title">Master of Computer Application</span>
          <span class="title">2022-2024</span>
        </div>
        <p>Center for Computer Science and Information Technology</p>
        <p>University of calicut</p>
        <div class="bottom">
          <button onClick={handlemca}>click me</button>
          {/* <i>- Someone famous</i> */}
        </div>
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-star"></i>
        <div class="details">
          <span class="title">Bsc Computer Science</span>
          <span class="title">2018-2021</span>
        </div>
        <p>Mount Seena College of Arts and Science</p>
        <p>University of Calicut</p>
        <div class="bottom">
        <button onClick={handlebsccs}>click me</button>
          {/* <i>- Someone famous</i> */}
        </div>
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-rocket"></i>
        <div class="details">
          <span class="title"> Higher Secondary</span>
          <span class="title">2016-2018</span>
        </div>
        <p>Government Vocational Higher Secondary School</p>
        <p>The Directorate of Higher Education (DHSE)</p>
        <div class="bottom">
        <button onClick={handle12}>click me</button>
          {/* <i>- Someone famous</i> */}
        </div>
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-globe"></i>
        <div class="details">
          <span class="title">Matriculation</span>
          <span class="title">2006-2016</span>
        </div>
        <p>Mount Seena Public School</p>
        <p>Central Board  of Secondary Education (CBSE)</p>
        <div class="bottom">
        <button onClick={handle10}>click me</button>
         {/*  <i>- Someone famous</i> */}
        </div>
      </section>
    </div>
      </div>
  );
}

export default Education;
