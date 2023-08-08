import React from 'react' ; 
import '../css/footer.css' ;

export default function Footer() {
  return (
    <>
    <div class="footer-basic">
        <footer>
            <div class="social"><a href="#"><i class="bi bi-facebook"></i></a><a href="#"><i class="bi bi-telegram"></i></a><a href="#"><i class="bi bi-twitter"></i></a><a href="#"><i class="bi bi-google"></i></a></div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Home </a></li>
                <li class="list-inline-item"><a href="#">Services </a></li>
                <li class="list-inline-item"><a href="#">About</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright"> Copyright © 2023| ShareTech</p>
            </footer>
        </div>         

    </>

  )
}
