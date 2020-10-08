import moment from 'moment';

const DateManager = {
    /**
     * @name 월의 1일 부터 31일까지의 길이를 조회
     * @param {int} year 년
     * @param {int} month 월
     * @param {string} format 조회형식 ex) 'YYYYMMDD', 'YYYY-MM-DD'
     */
    getMonthRange: (year, month, format) => {
        const date = moment(`${year}-${month}-${1}`);
        return {
            start: date.startOf('month').format(format ? format : 'YYYY-MM-DD'),
            end: date.endOf('month').format(format ? format : 'YYYY-MM-DD')
        }
    },

    /**
     * @name 정해진 포맷에 맟춘 날짜 형식 리턴 함수
     * @param {date} _date 날짜
     * @param {string} format 조회형식 ex) 'YYYYMMDD', 'YYYY-MM-DD'
     */
    getDateFormat: (_date, format) => {
        return moment(_date).format(format);
    },

    /**
     * @name UTC 날짜로 조회
     * @param {date} _date 날짜
     */
    getUtcDate: (_date) => {
        return moment.utc(_date).valueOf();
    },

    /**
     * @name 정해진 포맷의 날짜를 일수 증가하는 함수
     * @param {date} _date 날짜
     * @param {string} 증가할 일
     * @param {string} format 조회형식 ex) 'YYYYMMDD', 'YYYY-MM-DD'
     */
    addDay: (_date, add, format) => {
        return moment(_date).add(add, 'd').format(format);
    }
}

export default DateManager;