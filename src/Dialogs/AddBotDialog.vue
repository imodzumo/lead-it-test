<template>
    <v-dialog
            v-model="isDialogOpen"
            width="600"
            hide-overlay
            transition="dialog-bottom-transition"
    >
        <template v-slot:activator="{on}">
            <v-btn
                    color="teal"
                    class="text-uppercase"
                    dark
                    v-on="on"
            >Add new bot</v-btn>
        </template>

        <v-toolbar flat dark class="teal">
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn
                        fab
                        dark
                        icon
                        @click="isDialogOpen = false">
                    <v-icon dark>mdi-close</v-icon>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <v-card>
            <v-form
                    ref="form"
                    lazy-validation
                    v-model="isValidOrder"
            >
                <v-container>
                    <div class="justify-center text-center title py-4">Add Telegram Bot</div>
                    <v-divider></v-divider>
                    <v-row class="mx-0">
                        <v-col cols="12">
                            <v-text-field
                                    label="Name"
                                    v-model="botData.name"
                                    :rules="rules"
                                    required
                                    color="teal"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12">
                            <v-textarea
                                    label="Description"
                                    v-model="botData.description"
                                    :rules="rules"
                                    required
                                    color="teal"
                                    outlined
                                    filled
                            ></v-textarea>
                        </v-col>

                    </v-row>

                    <v-row class="mx-0">
                        <v-col cols="12">
                            <drop-an-image :image-data="botData.image" @image-dropped="setImage"></drop-an-image>
                        </v-col>
                    </v-row>

                    <v-row class="mx-0">
                        <v-col cols="12" class="d-flex justify-center">
                            <v-date-picker
                                    v-model="botData.date"
                                    color="teal"
                            ></v-date-picker>
                        </v-col>
                    </v-row>

                    <div class="d-flex justify-end">
                        <v-btn
                                class="my-4 white--text"
                                color="teal"
                                depressed
                                @click="saveBot"
                                :disabled="!isValidOrder"
                        >Save</v-btn>
                    </div>
                </v-container>
            </v-form>
        </v-card>
    </v-dialog>
</template>

<script>

    import DropAnImage from '../components/DropAnImage.vue'

    export default {
        name: "AddBotDialog",
        components: {DropAnImage},
        data() {
            return {
                isDialogOpen: false,
                rules: [v => !!v || 'Required Field'],
                botData: {
                    id: null,
                    name: null,
                    description: null,
                    image: null,
                    date: new Date().toISOString().substr(0, 10)
                },
                isValidOrder: false,
            }
        },
        methods: {
            dateChange(data) {
                this.botData.date = data;
            },
            reset() {
                this.$refs.form.reset();
                this.botData = {
                    id: null,
                    name: null,
                    description: null,
                    image: null,
                    date: new Date().toISOString().substr(0, 10)
                };
            },
            setImage(file) {
                this.botData.image = file;
            },
            saveBot() {
                if (this.$refs.form.validate()) {
                    this.isDialogOpen = false;

                    this.$store.commit('increment');
                    this.botData.id = this.$store.state.botsId;

                    this.$store.commit('addBot', this.botData);

                    this.reset();
                }
            }
        }
    }
</script>

<style scoped>

</style>