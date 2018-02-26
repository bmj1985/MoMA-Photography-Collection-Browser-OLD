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
import moment from 'moment';
export default {
  name: 'AttributeModal',
  data() {
    return {
      date: this.mutatedArtwork.DateAcquired,
      mutatedCurator: ''
    };
  },
  props: ['mutatedArtwork', 'departmentHeads'],
  mounted() {
    this.getSpecificCurator();
  },
  methods: {
    close() {
      this.$emit('close');
    },
    getSpecificCurator() {
      return this.departmentHeads
        .filter(head => {
          if (
            moment(new Date(this.date)).isBefore(head.PositionEndYear) &&
            moment(new Date(this.date)).isAfter(head.PositionBeginYear)
          ) {
            return head;
          }
        })
        .forEach(head => {
          this.mutatedCurator = head.DisplayName;
        });
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

.btn {
  color: white;
  border: 1px solid black;
  border-radius: 2px;
}
</style>