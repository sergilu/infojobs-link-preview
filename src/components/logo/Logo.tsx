export interface LogoProps {
    height?: number;
    width?: number;
}

export function Logo({
    height = 20,
    width = 79,
}: LogoProps) {
    return (
        <svg width={width} height={height} viewBox="0 0 79 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M43.8586 4.656e-05C44.0094 4.656e-05 44.094 0.0994139 44.1128 0.225004L44.1168 0.280221L42.1643 15.903C41.7647 19.1527 39.7675 19.9636 37.3323 19.9988L37.1617 20C36.3528 20 35.9282 19.981 35.6465 19.9567L34.9868 19.8779C34.858 19.8552 34.7496 19.805 34.7245 19.6317L34.719 19.5495V19.4426L34.8653 18.1981C34.9074 17.8331 35.0542 17.715 35.376 17.715C35.6764 17.6939 36.0846 17.6925 36.5356 17.6711L36.9868 17.6418C37.7994 17.5733 38.3152 17.3809 38.5848 16.1496L38.6185 15.983L40.5307 0.304432C40.549 0.15727 40.6 0.0661213 40.7357 0.0298147L40.8109 0.0162262L43.8586 4.656e-05ZM50.998 3.98837C52.9511 3.98837 54.1754 4.41847 54.9046 5.14667C55.6353 5.87708 55.8504 6.88487 55.8504 8.12895C55.8504 9.48129 55.6139 11.3481 55.1418 12.5698C54.432 14.5005 52.9722 15.8105 49.536 15.8105C47.6023 15.8105 46.3995 15.4022 45.6695 14.6943C44.9187 13.9437 44.6822 12.8924 44.6822 11.6476C44.6822 10.2746 44.9607 8.23709 45.4763 6.99242C46.2288 5.19067 47.7107 3.98837 50.998 3.98837ZM32.5137 3.98835C34.4681 3.98835 35.6923 4.41763 36.4224 5.14746C37.1525 5.87706 37.3676 6.88496 37.3676 8.12951C37.3676 9.48033 37.1305 11.3469 36.6593 12.5698C35.9502 14.5004 34.4894 15.8093 31.0537 15.8093C29.1201 15.8093 27.9166 15.4022 27.1866 14.6942C26.4358 13.943 26.1982 12.8917 26.1982 11.6477C26.1982 10.2745 26.4785 8.23637 26.9935 6.99159C27.7448 5.19065 29.2279 3.98835 32.5137 3.98835ZM75.3433 4.01014C77.0612 4.01014 78.381 4.37436 78.7892 4.50309C78.9148 4.53918 78.9774 4.6194 78.9948 4.71997L79 4.78257V4.88931L78.5519 6.30566C78.5092 6.45594 78.3615 6.51914 78.2117 6.51914C78.1967 6.51914 78.1815 6.50998 78.1603 6.50388L78.0229 6.48367C77.6507 6.42087 76.561 6.19741 75.5424 6.19741C75.0056 6.19741 74.3536 6.26201 73.946 6.58433C73.7013 6.79047 73.5611 7.06265 73.5298 7.37139L73.5231 7.52856C73.5231 8.42868 74.5266 8.47187 75.5139 8.6659C76.3731 8.79429 77.2468 9.00835 77.8051 9.56638C78.2346 9.97378 78.4924 10.5957 78.4924 11.5404C78.4924 12.5909 78.1701 13.6637 77.4187 14.4574C76.4734 15.4449 74.9698 15.8093 73.2951 15.8093C71.4476 15.8093 69.7722 15.3589 69.4078 15.1867L69.341 15.151C69.2795 15.1181 69.2133 15.0681 69.2133 14.9299C69.2133 14.8868 69.2133 14.8535 69.2197 14.8106L69.2349 14.7366L69.6662 13.3635C69.7295 13.1712 69.8149 13.1062 69.9442 13.1062C69.9867 13.1062 70.0093 13.1062 70.052 13.1275L70.5541 13.2535C71.1654 13.4021 72.1932 13.621 73.1438 13.621C73.7456 13.621 74.3044 13.514 74.6692 13.1919C74.9916 12.9344 75.1204 12.5698 75.1204 12.2046C75.1204 11.7547 74.9701 11.5185 74.6694 11.3688C74.4545 11.2613 74.1853 11.1975 73.869 11.1385L72.9217 10.9659C72.2209 10.8287 71.4259 10.6203 70.8691 10.0806C70.4609 9.65158 70.2046 9.07307 70.2046 8.17109C70.2046 7.22709 70.4641 6.21941 71.0644 5.4904C72.1392 4.20243 73.9694 4.01014 75.3433 4.01014ZM61.7708 0C61.9398 0 62.0677 0.0932181 62.097 0.260316L62.1034 0.336396V0.39995L61.7428 3.13023L61.5812 4.38595L61.8056 4.32384C62.236 4.21204 63.2299 3.98844 64.294 3.98844C65.7108 3.98844 66.7413 4.26804 67.4074 4.91173C68.0514 5.53295 68.3532 6.51968 68.3532 8.00005C68.3532 9.35169 68.1378 10.8968 67.7522 12.2055C67.0202 14.6295 65.539 15.8087 62.1026 15.8087C60.4262 15.8087 58.9667 15.5721 58.1507 15.2938C57.3128 15.015 57.0992 14.6495 57.0992 14.0691C57.0992 13.8834 57.1183 13.6774 57.15 13.4401L57.2063 13.0591L58.7207 0.534741C58.7397 0.267487 58.8434 0.09579 59.0777 0.0302777L59.1717 0.0107088L61.7708 0ZM23.7053 0.0393432C25.2511 0.0393432 26.2183 0.319518 26.5395 0.405654C26.6905 0.448722 26.7327 0.557788 26.7327 0.686178C26.7327 0.700844 26.7327 0.726788 26.7265 0.755078L26.7118 0.798154L26.3042 2.26503C26.2672 2.43085 26.214 2.52971 26.0913 2.55457L26.024 2.5608H25.938C25.6803 2.4444 25.0142 2.38888 24.4352 2.38888C23.476 2.38888 23.0783 2.6015 22.9317 3.3959L22.9105 3.52622L22.7388 4.8888H25.4651C25.6358 4.8888 25.723 4.9862 25.7422 5.12519L25.7463 5.18713V5.23043L25.5418 6.92126C25.5231 7.08931 25.4136 7.18954 25.2571 7.21197L25.1873 7.2168H22.4585L21.3077 15.2973C21.2697 15.5187 21.1082 15.5838 20.9375 15.5955L20.8733 15.5976H18.3329C18.1838 15.5976 18.0542 15.5972 18.0224 15.4367L18.0152 15.3686L18.0758 14.937L18.0941 14.7828H18.0971L19.1513 7.2651L19.6029 3.45033C19.882 1.17622 21.1915 0.0393432 23.7053 0.0393432ZM12.9387 4.08195C14.486 4.08195 15.6131 4.29647 16.2786 4.93935C16.6321 5.31344 16.8514 5.83111 16.8854 6.52644L16.8901 6.74169C16.8901 6.9778 16.8766 7.207 16.8578 7.43335L16.7935 8.10799L15.9029 15.2894C15.8841 15.4582 15.7666 15.5676 15.6081 15.5923L15.5379 15.5976H12.9175C12.7485 15.5976 12.6157 15.5353 12.5852 15.4052L12.5785 15.3453V15.3027L13.4313 8.32996C13.4638 8.10438 13.4923 7.87867 13.5044 7.66254L13.5108 7.42833C13.5108 7.08495 13.461 6.82526 13.311 6.65427C13.0959 6.39714 12.7675 6.28796 12.2514 6.28796C11.6131 6.28796 10.9174 6.39359 10.4799 6.47407L10.0394 6.56359L8.96626 15.2894C8.94648 15.4582 8.82918 15.5676 8.65606 15.5923L8.57857 15.5976H5.959C5.79035 15.5976 5.63187 15.5353 5.59489 15.4052L5.5868 15.3453V15.3027L6.77155 5.94807C6.87899 5.13316 7.46222 4.8751 8.75056 4.57548C9.86761 4.31812 11.5871 4.08195 12.9387 4.08195ZM2.04741 0.116446H5.17015C5.2977 0.116446 5.34152 0.164251 5.35144 0.272395L5.3538 0.374854L3.53898 15.2894C3.52032 15.4582 3.40665 15.5676 3.24839 15.5923L3.17798 15.5976H0.322319C0.172026 15.5976 0.0379702 15.5334 0.00680465 15.4028L0 15.3427L1.79723 0.376717C1.81537 0.226183 1.84441 0.139814 1.98167 0.120574L2.04741 0.116446ZM63.2836 6.24136C62.65 6.24136 61.8775 6.39253 61.5149 6.4721L61.3081 6.51979L60.4701 13.4067L60.7186 13.4558C61.0072 13.5065 61.519 13.5784 62.1026 13.5784C63.6497 13.5784 64.294 13.1492 64.7016 10.8758C64.8734 9.95231 65.0027 8.96547 65.0027 8.02193C65.0027 7.40013 64.9163 6.97143 64.7236 6.69265C64.444 6.32715 63.9922 6.24136 63.2836 6.24136ZM50.7174 6.22011C49.2076 6.22011 48.7134 6.87594 48.4301 8.28519L48.3983 8.45115C48.2037 9.50282 48.0331 10.6822 48.0331 11.7547C48.0331 12.4199 48.1186 12.8924 48.4402 13.1919C48.72 13.4501 49.1495 13.5783 49.8151 13.5783C51.4269 13.5783 51.8777 12.8273 52.1562 11.2183C52.3493 10.1891 52.5 9.09461 52.5 8.06493C52.5 7.42078 52.4142 6.97147 52.135 6.67011C51.8556 6.37062 51.4269 6.22011 50.7174 6.22011ZM32.2341 6.2202C30.6662 6.2202 30.1938 6.92838 29.9141 8.45124C29.7205 9.5028 29.5498 10.6815 29.5498 11.7548C29.5498 12.4199 29.6362 12.8917 29.9575 13.1919C30.2359 13.4493 30.6662 13.5783 31.3328 13.5783C32.8852 13.5783 33.36 12.8806 33.6428 11.3881L33.6735 11.219C33.8666 10.1885 34.0171 9.09458 34.0171 8.06491C34.0171 7.42075 33.9301 6.97087 33.6527 6.67009C33.373 6.36978 32.9427 6.2202 32.2341 6.2202Z" fill="#167DB7"/>
        </svg>
    )
}