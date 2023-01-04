<template>
  <section class="contact-area" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-11 offset-lg-3">
          <div class="contact-content text-center">
            <div class="contact-social">
              <ul>
                <li><a class="hover-target" href=""><i class="fab fa-twitter"></i></a></li>
                <li><a class="hover-target" href=""><i class="fab fa-github"></i></a></li>
                <li><a class="hover-target" href=""><i class="fab fa-pinterest-p"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- =============== 1.9 Contact Area End ====================-->
  <!-- =============== 1.9 Footer Area Start ====================-->
  <footer>
    <p>Copyright &copy; 2019 All Rights Reserved.</p>
  </footer>
</template>

<style lang="scss">
$bg: #040506 !important;
$color: #868c96 !important;

.contact-area {
  border-bottom: 1px solid #111316;
  background: #040506 !important;
  color: #868c96 !important;
  padding: 10px 0 30px;

  p {
    color: $color;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .contact-content p {
    font-size: 15px;
    margin: 30px 0 60px;
    position: relative;
  }

  .contact-content p::after {
    background: $bg;
    bottom: -30px;
    content: "";
    height: 1px;
    left: 50%;
    position: absolute;
    transform: translate(-50%);
    width: 80%;
  }

  .contact-content h6 {
    color: $color;
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 10px;
  }

  .contact-content span {
    color: #353c47 !important;
    margin: 0 10px;
  }

  .contact-social {
    margin-top: 30px;
  }

  .contact-social > ul {
    display: inline-flex;
  }

  .contact-social ul li a {
    border: 1px solid #111316;
    color: #8b9199 !important;
    display: inline-block;
    height: 40px;
    margin: 0 10px;
    padding-top: 7px;
    transition: all 0.4s ease 0s;
    width: 47px;
  }

  .contact-social ul li a:hover {
    border: 1px solid #3a85e3 !important;
    color: #3a85e3 !important;
  }

  i.fab {
    color: #505050;
    margin-top: 11px;
  }

  i.fab:hover {
    color: #3a85e3;
    transition: all 0.4s ease 0s;
  }

  .contact-content img {
    max-width: 210px;
  }

  .contact-content.text-center {
        text-align: center;
    }
}

footer {
  background: $bg;
  color: #868c96 !important;
  margin-bottom: -25px;
}

footer p {
  padding: 20px 0 !important;
  text-align: center !important;
  color: #474b50 !important;
}
</style>
