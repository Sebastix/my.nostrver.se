import fetch from 'cross-fetch'

export default class Nip05 {
  static async fetchPubkey(nip05Id) {
    const [user, host] = nip05Id.split('@')
    if (!user || !host) return

    const url = `https://${host}/.well-known/nostr.json?name=${user}`
    try {
      const res = await fetch(url)
      const json = await res.json()
      if (!json || !json.names) return
      return json.names[user]
    } catch (e) {
      console.warn(`Failed to fetch NIP05 data for ${nip05Id}`, e)
    }
  }

  static async fetchNames(domain) {
    const url = `https://${domain}/.well-known/nostr.json`
    try {
      const res = await fetch(url)
      const json = await res.json()
      return json?.names
    } catch (e) {
      console.warn(`Failed to fetch NIP05 data for ${domain}`, e)
    }
  }

  //@todo fetchRelays of nip05Id

  static async verify(pubkey, nip05Id) {
    const pk = await Nip05.fetchPubkey(nip05Id)
    return pk && pk === pubkey
  }
}
