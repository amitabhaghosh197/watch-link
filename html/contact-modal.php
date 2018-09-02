<!-- Modal -->
<section class="modal fade wl-contact-modal" id="contactModal" tabindex="-1" role="dialog" aria-labelledby="contactModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog--contact-modal" role="document">
    <div class="modal-content">

      <div class="modal-body wl-contact-modal__body">
        <button class="btn btn--cancel" data-dismiss="modal"><?php include 'templates/svg/cancel.php'; ?></button>
         <form class="contact-form wl--forms" id="contactForm" action="/">
           <div class="form-group wl__form-group">
             <p>
               All * Fields are required
             </p>
           </div>
           <div class="form-group wl__form-group">
             <div class="col-lg-6">
               <input type="text" class="form-control form-control--wl-control" placeholder="Name*" />
             </div>
             <div class="col-lg-6">
               <input type="email" class="form-control form-control--wl-control" placeholder="Email*" />
             </div>

           </div>

           <div class="form-group wl__form-group">
             <div class="col-lg-12">
               <input type="text" class="form-control form-control--wl-control" placeholder="Phone*" />
             </div>
           </div>
           <div class="form-group wl__form-group">
             <div class="col-lg-12">
               <textarea class="form-control form-control--textarea-wl " placeholder="Message"></textarea>
             </div>

           </div>

           <div class="modal-footer">
             
             <button type="submit" class="btn btn--xs-gradient">Submit</button>
           </div>

         </form>
      </div>

    </div>
  </div>
</section>
