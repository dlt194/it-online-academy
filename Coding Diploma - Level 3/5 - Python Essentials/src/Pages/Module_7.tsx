function Module_7() {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Understanding Python Operators
        </h2>
        <div className="prose max-w-none">
          <p>
            Python operators are symbols or special keywords that you can use to
            perform various operations on variables and values.
          </p>

          <p>
            Python provides a wide range of operators for different purposes,
            including arithmetic, comparison, logical, assignment, and more.
          </p>

          <br />

          <h2 className="font-semibold pb-2">Logical Operators</h2>
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Operator
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Description
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Example
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">and</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns True if both statements are true
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x &lt; 5 and x &lt; 10
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">or</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns True if one of the statements is true
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x &lt; 5 or x &lt; 4
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">not</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Reverse the result; returns False if the result is True
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  <pre className="font-mono text-sm whitespace-pre-wrap">
                    not (x &lt; 5 and x &lt; 10)
                  </pre>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Working with Floor Division & Comparison Operators
        </h2>
        <div className="prose max-w-none">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Method
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Description
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Example
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">+</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">Addition</td>
                <td className="px-4 py-2 text-sm text-slate-700">x + y</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">-</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Subtraction
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">x - y</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">*</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Multiplication
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">x * y</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">/</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">Division</td>
                <td className="px-4 py-2 text-sm text-slate-700">x / y</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">%</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">Modulus</td>
                <td className="px-4 py-2 text-sm text-slate-700">x % y</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">**</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Exponentiation
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">x ** y</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">//</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Floor division
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">x // y</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Understanding Comparison Operators
        </h2>
        <div className="prose max-w-none">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Operator
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Description
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Example
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">==</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">Equal</td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x == y
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">!=</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">Not equal</td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x != y
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">&gt;</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Greater than
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x &gt; y
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">&lt;</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">Less than</td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x &lt; y
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">&gt;=</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Greater than or equal to
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x &gt;= y
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">&lt;=</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Less than or equal to
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x &lt;= y
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Understanding Assignment Operators
        </h2>
        <div className="prose max-w-none">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Operator
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Usage
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Equivalent
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">=</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x = 5
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x = 5
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">+=</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x += 3
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x = x + 3
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">-=</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x -= 3
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x = x - 3
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">*=</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x *= 3
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x = x * 3
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">/=</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x /= 3
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x = x / 3
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">%=</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x %= 3
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x = x % 3
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">//=</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x //= 3
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x = x // 3
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">**=</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x **= 3
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x = x ** 3
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">&amp;=</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x &= 3
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x = x &amp; 3
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">|=</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x |= 3
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x = x | 3
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">^=</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x ^= 3
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x = x ^ 3
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">
                    &raquo;&raquo;=
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x &gt;&gt;= 3
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x = x &gt;&gt; 3
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">
                    &laquo;&laquo;=
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x &lt;&lt;= 3
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x = x &lt;&lt; 3
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">:=</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  <pre className="font-mono text-sm whitespace-pre-wrap">
                    print(x := 3)
                  </pre>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  <pre className="font-mono text-sm whitespace-pre-wrap">
                    x = 3 print(x)
                  </pre>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Understanding Membership Operators
        </h2>
        <div className="prose max-w-none">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Operator
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Description
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Example
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">in</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns True if a sequence with the specified value is present
                  in the object
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x in y
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">not in</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns True if a sequence with the specified value is not
                  present in the object
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x not in y
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Understanding Identity Operators
        </h2>
        <div className="prose max-w-none">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Operator
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Description
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Example
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">is</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns True if both variables are the same object
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x is y
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">is not</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns True if both variables are not the same object
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x is not y
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Python Bitwise Operators
        </h2>
        <div className="prose max-w-none">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Operator
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Description
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Example
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">&amp;</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">AND</td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Sets each bit to 1 if both bits are 1
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x &amp; y
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">|</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">OR</td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Sets each bit to 1 if one of two bits is 1
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x | y
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">^</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">XOR</td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Sets each bit to 1 if only one of two bits is 1
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x ^ y
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">~</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">NOT</td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Inverts all the bits
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  ~x
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">
                    &laquo;&laquo;
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Zero fill left shift
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Shift left by pushing zeros in from the right and let the
                  leftmost bits fall off
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x &lt;&lt; 2
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">
                    &raquo;&raquo;
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Signed right shift
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Shift right by pushing copies of the leftmost bit in from the
                  left, and let the rightmost bits fall off
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x &gt;&gt; 2
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Understanding Bitwise Operators
        </h2>
        <div className="prose max-w-none">
          <p>
            Operator precedence describes the order in which operations are
            performed.
          </p>
          <p>
            The precedence order is described in the table below, starting with
            the highest precedence at the top:
          </p>
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Operator(s)
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  ()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Parentheses
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  **
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Exponentiation
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  +x -x ~x
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Unary plus, unary minus, and bitwise NOT
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  * / // %
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Multiplication, division, floor division, and modulus
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  + -
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Addition and subtraction
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  &laquo;&laquo; &raquo;&raquo;
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Bitwise left and right shifts
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  &amp;
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Bitwise AND
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  ^
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Bitwise XOR
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  |
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">Bitwise OR</td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  == != &gt; &gt;= &lt; &lt;= is is not in not in
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Comparisons, identity, and membership operators
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  not
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Logical NOT
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  and
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">AND</td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  or
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">OR</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Understanding Python List
        </h2>
        <div className="prose max-w-none">
          <p>
            In Python, a list is a built-in data type used to store a collection
            of items. Lists are versatile and can hold elements of different
            types, including numbers, strings, or even other lists.
          </p>

          <p>
            Lists are ordered, meaning that the order of elements in a list is
            preserved, and they are mutable, which means you can change their
            content by adding, removing, or modifying elements. Lists are
            defined using square brackets [] and can be created in several ways.
          </p>
          <br />
          <code className="">
            <pre className="bg-gray-100 p-4 rounded">{`mylist = ["apple", "banana", "cherry"]`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Understanding Python List Operators
        </h2>
        <div className="prose max-w-none">
          <p>You can perform various operations on lists:</p>
          <ul className="list-disc pl-6">
            <li>
              Concatenation: Combine two or more lists using the + operator.
              <code className="">
                <pre className="bg-gray-100 p-4 rounded">{`combined_list= my_list + [8, 9, 10]`}</pre>
              </code>
            </li>
            <li>
              Repetition: Repeat a list using the * operator.{" "}
              <code className="">
                <pre className="bg-gray-100 p-4 rounded">{`repeated_list=my_list* 3`}</pre>
              </code>
            </li>
            <li>
              Length: Find the number of elements in a list using the len()
              function.{" "}
              <code className="">
                <pre className="bg-gray-100 p-4 rounded">{`length = len(my_list) # Returns 5`}</pre>
              </code>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Project: Student Grade Calculator
        </h2>
        <div className="prose max-w-none">
          <code className="">
            <pre className="bg-gray-100 p-4 rounded">{`scores = [48, 63, 92, 34, 86]

total_score = sum(scores)
num_scores = len(scores)
avg_score = total_score // num_scores

if avg_score >= 90:
    grade = "A"
elif avg_score >= 80:
    grade = "B"
elif avg_score >= 70:
    grade = "C"
elif avg_score >= 60:
    grade = "D"
else:
    grade = "F"

if avg_score % 10 >= 5:
    grade += "+"


check_score = 90
if check_score in scores:
    print(f"The score {check_score} exists in the list.")
else:
    print(f"The score {check_score} does not exist in the list.")

scores_copy = scores
if scores is scores_copy:
    print("The scores and scores_copy are the same object.")
else:
    print("The scores and scores_copy are different objects.")

bitwise_result = scores[0] & scores[1]
print(f"Bitwise AND of the first two scores: {bitwise_result}")


print(f"The student's average score is {avg_score} and their grade is {grade}.")
`}</pre>
          </code>
        </div>
      </section>
    </>
  );
}

export default Module_7;
