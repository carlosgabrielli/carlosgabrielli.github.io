<template>
  <div>
    <div>
      <VuePaycard
        :inputFields="inputFields"
        :valueFields="valueFields"
        :labels="labels"
        :isCardNumberMasked="isCardNumberMasked"
        :hasRandomBackgrounds="hasRandomBackgrounds"
        :backgroundImage="backgroundImage"
      />
      <form class="material-form-extra mt-14">
        <fieldset class="material-input-wrapper">
          <input
            class="material-input-extra"
            type="tel"
            :id="inputFields.cardNumber"
            title="Number"
            value="4509 9535 6623 3704"
            @input="changeNumber"
            data-card-field
            autocomplete="off"
            :maxlength="cardNumberMaxLength"
          />
          <label class="material-label-extra">Número de tarjeta</label>
        </fieldset>
        <fieldset class="material-input-wrapper">
          <input
            class="material-input-extra"
            type="text"
            :id="inputFields.cardName"
            title="Name"
            v-letter-only
            value="Carlos Gabrielli"
            @input="changeName"
            data-card-field
            autocomplete="off"
          />
          <label for="cardName" class="material-label-extra"
            >Nombre completo</label
          >
        </fieldset>
        <!-- Select -->
        <div class="d-flex">
          <v-row :align="align" gutters>
            <v-col>
              <fieldset class="material-input-wrapper">
                <select
                  class="material-input-extra select"
                  :id="inputFields.cardMonth"
                  aria-label="Card Month"
                  title="Month"
                  v-model="valueFields.cardMonth"
                  data-card-field
                >
                  <option value disabled selected>Mes</option>
                  <option
                    v-bind:value="n < 10 ? '0' + n : n"
                    v-for="n in 12"
                    v-bind:disabled="n < minCardMonth"
                    v-bind:key="n"
                  >
                    {{ generateMonthValue(n) }}
                  </option>
                </select>
                <label for="cardMonth" class="material-label-extra">Mes</label>
              </fieldset>
            </v-col>
            <v-col>
              <fieldset class="material-input-wrapper">
                <select
                  class="material-input-extra select"
                  :id="inputFields.cardYear"
                  aria-label="Card year"
                  title="Year"
                  v-model="valueFields.cardYear"
                  data-card-field
                >
                  <option value disabled selected>Año</option>
                  <option
                    v-bind:value="$index + minCardYear"
                    v-for="(n, $index) in 12"
                    v-bind:key="n"
                  >
                    {{ $index + minCardYear }}
                  </option>
                </select>
                <label class="material-label-extra">Año</label>
              </fieldset>
            </v-col>
          </v-row>
        </div>
        <fieldset class="material-input-wrapper">
          <input
            class="material-input-extra"
            type="tel"
            title="CVV"
            v-number-only
            :id="inputFields.cardCvv"
            maxlength="4"
            :value="valueFields.cardCvv"
            @input="changeCvv"
            data-card-field
            autocomplete="off"
          />
          <label for="cardCvv" class="material-label-extra"
            >Código de seguridad</label
          >
        </fieldset>
      </form>
    </div>
  </div>
</template>
 
<script>
import { VuePaycard } from "vue-paycard";

export default {
  name: "TarjetaCargada",
  components: { VuePaycard },
  directives: {
    "number-only": {
      bind(el) {
        function checkValue(event) {
          event.target.value = event.target.value.replace(/[^0-9]/g, "");
          if (event.charCode >= 48 && event.charCode <= 57) {
            return true;
          }
          event.preventDefault();
        }
        el.addEventListener("keypress", checkValue);
      },
    },
    "letter-only": {
      bind(el) {
        function checkValue(event) {
          if (event.charCode >= 48 && event.charCode <= 57) {
            event.preventDefault();
          }
          return true;
        }
        el.addEventListener("keypress", checkValue);
      },
    },
  },
  data: () => ({
    minCardYear: new Date().getFullYear(),
    mainCardNumber: "",
    cardNumberMaxLength: 19,
  }),
  computed: {
    minCardMonth() {
      if (this.valueFields.cardYear === this.minCardYear)
        return new Date().getMonth() + 1;
      return 1;
    },
  },
  watch: {
    cardYear() {
      if (this.valueFields.cardMonth < this.minCardMonth) {
        this.valueFields.cardMonth = "";
      }
    },
  },
  methods: {
    changeName(e) {
      this.valueFields.cardName = e.target.value;
      this.$emit("input-card-name", this.valueFields.cardName);
    },
    changeNumber(e) {
      this.valueFields.cardNumber = e.target.value;
      let value = this.valueFields.cardNumber.replace(/\D/g, "");
      // american express, 15 digits
      if (/^3[47]\d{0,13}$/.test(value)) {
        this.valueFields.cardNumber = value
          .replace(/(\d{4})/, "$1 ")
          .replace(/(\d{4}) (\d{6})/, "$1 $2 ");
        this.cardNumberMaxLength = 17;
      } else if (/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(value)) {
        // diner's club, 14 digits
        this.valueFields.cardNumber = value
          .replace(/(\d{4})/, "$1 ")
          .replace(/(\d{4}) (\d{6})/, "$1 $2 ");
        this.cardNumberMaxLength = 16;
      } else if (/^\d{0,16}$/.test(value)) {
        // regular cc number, 16 digits
        this.valueFields.cardNumber = value
          .replace(/(\d{4})/, "$1 ")
          .replace(/(\d{4}) (\d{4})/, "$1 $2 ")
          .replace(/(\d{4}) (\d{4}) (\d{4})/, "$1 $2 $3 ");
        this.cardNumberMaxLength = 19;
      }

      if (e.inputType == "deleteContentBackward") {
        let lastChar = this.valueFields.cardNumber.substring(
          this.valueFields.cardNumber.length,
          this.valueFields.cardNumber.length - 1
        );

        if (lastChar == " ") {
          this.valueFields.cardNumber = this.valueFields.cardNumber.substring(
            0,
            this.valueFields.cardNumber.length - 1
          );
        }
      }
      this.$emit("input-card-number", this.valueFields.cardNumber);
    },
    changeMonth() {
      this.$emit("input-card-month", this.valueFields.cardMonth);
    },
    changeYear() {
      this.$emit("input-card-year", this.valueFields.cardYear);
    },
    changeCvv(e) {
      this.valueFields.cardCvv = e.target.value;
      this.$emit("input-card-cvv", this.valueFields.cardCvv);
    },
    generateMonthValue(n) {
      return n < 10 ? `0${n}` : n;
    },
    toggleMask() {
      this.isCardNumberMasked = !this.isCardNumberMasked;
      if (this.isCardNumberMasked) {
        this.maskCardNumber();
      } else {
        this.unMaskCardNumber();
      }
    },
    maskCardNumber() {
      this.valueFields.cardNumberNotMask = this.valueFields.cardNumber;
      this.mainCardNumber = this.valueFields.cardNumber;
      let arr = this.valueFields.cardNumber.split("");
      arr.forEach((element, index) => {
        if (index > 4 && index < 14 && element.trim() !== "") {
          arr[index] = "*";
        }
      });
      this.valueFields.cardNumber = arr.join("");
    },
    unMaskCardNumber() {
      this.valueFields.cardNumber = this.mainCardNumber;
    },
  },
  props: {
    valueFields: {
      type: Object,
      default: {
        cardName: "",
        cardNumber: "",
        cardMonth: null,
        cardYear: null,
        cardCvv: null,
      },
    },
    inputFields: {
      type: Object,
      default: {
        cardNumber: "v-card-number",
        cardName: "v-card-name",
        cardMonth: "v-card-month",
        cardYear: "v-card-year",
        cardCvv: "v-card-cvv",
      },
    },
    labels: {
      type: Object,
      default: {
        cardName: "Nombre completo",
        cardHolder: "Titular",
        cardMonth: "MM",
        cardYear: "AA",
        cardExpires: "Vence",
        cardCvv: "CVV",
      },
    },
    isCardNumberMasked: {
      type: Boolean,
      default: true,
    },
    hasRandomBackgrounds: {
      type: Boolean,
      default: true,
    },
    backgroundImage: {
      type: [String, Number],
      default: "",
    },
  },
};
</script> 
