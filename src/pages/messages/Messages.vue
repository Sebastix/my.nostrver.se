<template>
  <PageHeader back-button>
    <template #addon>
      <q-btn icon="more_vert" size="md" round flat>
        <q-menu
          anchor="bottom right"
          self="top right"
          :offset="[0, 6]"
          class="options-popup"
        >
          <a @click="markAllAsRead" v-close-popup>{{
            $t("Mark all as read")
          }}</a>
        </q-menu>
      </q-btn>
    </template>
  </PageHeader>

  <div class="messages">
    <div class="text-center">
      <q-banner class="bg-dark text-white">
        Please consider using a more private and better Nostr client for your direct messages like <a href="https://blowater.app">Blowater</a> or <a href="https://0xchat.com/">0xChat</a>.
      </q-banner>
    </div>
    <ConversationItem
      v-for="conversation in conversations"
      :key="conversation.pubkey"
      :conversation="conversation"
    />
    <p v-if="!conversations?.length">
      {{ $t("To send a message, click on the") }}
      <BaseIcon icon="messages" />
      {{ $t("icon in the recipient's profile.") }}
    </p>
  </div>
</template>

<script>
import PageHeader from 'components/PageHeader.vue'
import { useAppStore } from 'stores/App'
import { useNostrStore } from 'src/nostr/NostrStore'
import { useMessageStore } from 'src/nostr/store/MessageStore'
import ConversationItem from 'components/Message/ConversationItem.vue'
import BaseIcon from 'components/BaseIcon/index.vue'

export default {
  name: 'Messages',
  components: {
    BaseIcon,
    ConversationItem,
    PageHeader,
  },
  setup() {
    return {
      app: useAppStore(),
      nostr: useNostrStore(),
      messages: useMessageStore(),
    }
  },
  computed: {
    conversations() {
      if (!this.app.isSignedIn) return []
      return this.messages.getConversations(this.app.myPubkey)
    },
  },
  methods: {
    markAllAsRead() {
      this.messages.markAllAsRead(this.app.myPubkey)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "assets/theme/colors.scss";

h3 {
  margin: 0;
  padding: 0 1rem;
}

p {
  padding: 0 1rem;
  svg {
    display: inline-block;
    width: 20px;
    height: 20px;
    fill: $color-fg;
    vertical-align: bottom;
  }
}
</style>
<style lang="scss">
@import "assets/theme/colors.scss";

.options-popup {
  background-color: $color-bg;
  box-shadow: $shadow-white;
  border-radius: 0.5rem;
  a {
    display: block;
    padding: 0.5rem 1rem;
    transition: 120ms ease;
    &:hover {
      background-color: rgba($color: $color-dark-gray, $alpha: 0.1);
    }
  }
}
</style>
