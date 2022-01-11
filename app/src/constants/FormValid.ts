export const VALID_TYPE = {
  USERNAME: 'username',
  PASSWORD: 'password',
  CONFIRM: 'confirm',
  FIRST_NAME_KANA: 'firstNameKana',
  LAST_NAME_KANA: 'lastNameKana'
} as const

export const VALID_REGEX = {
  USERNAME: /^[a-zA-Z0-9-]{8,}$/,
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d~!@#$%^&*()+|=]{8,}$/,
  CONFIRM: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d~!@#$%^&*()+|=]{8,}$/,
  KANA_NAME: /^[\u30A0-\u30FF]+$/
} as const

export const VALIDATION_TEXT = {
  USERNAME: '正しいユーザー名を入力してください。',
  PASSWORD: '英数字を含む８文字以上で入力してください。',
  KANA_NAME: 'カタカナで入力してください。',
  DUPLICATED: 'パスワードが一致していません。',
  AUTHENTICATED_ERROR: '権限がありません。',
  INVALID_ERROR:
    'ユーザー名かパスワードが伴っています。 もう一度ご確認の上、再度お試しください。'
} as const
