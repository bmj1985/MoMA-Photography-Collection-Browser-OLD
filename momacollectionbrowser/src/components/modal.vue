<template>
<transition name="modal-fade">
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header" class="modal-title">
          ABOUT THE MOMA PHOTOGRAPHY COLLECTION BROWSER
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"
            @click="close"
          >
            x
          </button>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          <p>The Museum of Modern Art has been instrumental in the history of photography,
             and has one of the most extensive photography collections in the world.  
             Although their own website is searchable and even sortable by year, 
             it does not give easily to browsing and discovery.</p>
          <p>
            This site was created in the hopes of making photography and photographers
             in the museum's collection easier to discover.  Currently the browser 
             supports browsing by print type, and shows a random selection each time 
             the radio buttons are clicked. Future implementations will have added 
             searching and browsing capabilities.
          </p>
          <p>You can find me on Github at <a href="https://github.com/bmj1985" target="blank">
          https://github.com/bmj1985</a> or feel free to contact me at bmj1985@gmail.com. </p>
          <p>Best, Brandon</p>
        </slot>
       </section>
       <footer class="modal-footer">
          <slot name="footer">
            Copyright Brandon Johnson 2018
            <button
              type="button"
              class="btn btn-secondary"
              @click="close"
            >
              Close
          </button>
        </slot>
      </footer>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'modal',

  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  height: 75vh;
  width: 75vw;
  margin: auto;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  font-family: inherit;
  font-size: 2rem;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: space-between;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  font-family: inherit;
  font-size: 1.25rem;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  background: transparent;
}

.btn-green {
  color: white;
  border: 1px solid black;
  border-radius: 2px;
}
</style>