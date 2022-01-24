export const VALID_REGEX = {
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d~!@#$%^&*()+|=]{8,}$/,
  KANA_NAME: /^[\u30A0-\u30FF]+$/,
  PHONE_NUMBER: /[0-9]{10,11}/
} as const

export const VALID_TEXT = {
  EMAIL: '正しいメールアドレスを入力してください。',
  PASSWORD: '英数字を含む８文字以上で入力してください。',
  USER_NOT_FOUND:
    'ユーザー名かパスワードが伴っています。 もう一度ご確認の上、再度お試しください.',
  DUPLICATED: 'パスワードが一致していません。',
  KANA_NAME: 'カタカナで入力してください。',
  IS_EMPTY: 'この項目は必須です。',
  INVALID_NUMBER: '半額数字で入力してください。'
}
