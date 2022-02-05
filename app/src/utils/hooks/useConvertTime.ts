import dayjs from '@utils/hooks/useDayJs'

/**
 *
 * @param format dateformat ymd: yyyy-mm-dd / ymdhm: yyyy-mm-dd hh:mm / hm: hh:mm / ymdhm-hm: yyyy-mm-dd hh:mm - hh:mm
 * @param dateTime Date or string
 * @param secondTime Date or string
 * @returns string
 */
export const useConvertTime = (
  format: string,
  dateTime?: Date | string | number,
  secondTime?: Date | string
): string => {
  switch (format) {
    case 'ymd': {
      return dayjs(dateTime).format('YYYY-MM-DD')
    }
    case 'ymdhm': {
      return dayjs(dateTime).format('YYYY-MM-DD HH:mm')
    }
    case 'hm': {
      return dayjs(dateTime).format('HH:mm')
    }
    case 'ymdhm-hm': {
      return `${dayjs(dateTime).format('YYYY-MM-DD HH:mm')} - ${dayjs(
        secondTime
      ).format('HH:mm')}`
    }
    default:
      return ''
  }
}

export default useConvertTime
