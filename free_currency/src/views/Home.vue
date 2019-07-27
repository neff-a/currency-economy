<template>
    <div>
        <v-layout wrap>
            <v-flex class="xs12">
                <h1 class="font-weight-black text-center">
                    Indicadores económicos para Chile
                </h1>
                <v-card>
                    <v-date-picker v-model="date"
                                   locale="es"
                                   :min="min_date"
                                   :max="max_date"
                                   @change="getDollar()"
                                   full-width>
                    </v-date-picker>
                </v-card>
                <v-card color="secondary">
                    <v-card-text class="display-1 text-center">
                        {{dollar_value_formatted}}
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import axios from 'axios'
    import { mapMutations } from 'vuex';
    export default {
        data() {
          return {
              date: this.current_date,
              min_date : '1984',
              max_date : new Date().toISOString().substr(0, 10),
              dollar_value: 0
          }
        },
        methods: {

            ...mapMutations(['showLoader', 'hideLoader']),

            async getDollar() {

                this.showLoader({title: 'Loading...'})

                try {

                    let response = await axios.get(this.full_url)

                    if (await response.data.serie.length == 0) {
                        this.dollar_value = 0;

                    } else {
                        this.dollar_value = await response.data.serie[0].valor
                    }

                } catch (error)  {

                } finally {

                    this.hideLoader()

                }
            }
        },
        computed: {
            full_url() {
                return `/dolar/${this.date_formatted}`
            },
            dollar_value_formatted() {
                return `$ ${this.dollar_value}`
            },
            date_formatted() {

                if (typeof this.date == 'undefined') {
                    this.date = this.current_date
                }

                let date_array = this.date.split(['-'])
                return date_array.reverse().join('-')
            },
            current_date() {
                return new Date().toISOString().substr(0, 10);
            }
        },
        mounted() {
            this.getDollar()
        }
    };
</script>
