import exchange_rates as fx


def convert(amount, from_currency, to_currency, rates=fx.RATES):
    from_currency = from_currency.upper()
    to_currency = to_currency.upper()

    if from_currency not in rates or to_currency not in rates:
        raise KeyError(
            f"Unknown currency code: {from_currency if from_currency not in rates else to_currency}"
        )

    value_in_gbp = amount / rates[from_currency]
    return f"{value_in_gbp:,.2f} {to_currency.upper()}"


def main():

    usd_to_eur = convert(100, "USD", "EUR")
    eur_to_gbp = convert(50, "EUR", "GBP")
    chf_to_jpy = convert(25, "CHF", "JPY")

    print("\n--- Conversions ---")
    print(f"{(100, 'USD')} -> {(usd_to_eur)}")
    print(f"{(50, 'EUR')}  -> {(eur_to_gbp)}")
    print(f"{(25, 'CHF')}  -> {(chf_to_jpy)}")


if __name__ == "__main__":
    main()
